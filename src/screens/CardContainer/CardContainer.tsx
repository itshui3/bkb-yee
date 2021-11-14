// external deps
import React, { useState, useRef } from 'react';
import { FlatList, View } from 'react-native';

// app deps
import { Card } from '../../components/Card/Card';

// local deps
import {
    CardContainerStyles as styles
} from './CardContainer.style';
import {
    cardsInit,
    CardInterface
} from './cardsData';
import { RenderCardItemGenerator } from './RenderCardItem';

interface CardContainerProps {}
export const CardContainer = (props: CardContainerProps) => {
    const flippedNums = useRef(new Set<number>()).current;
    const [cards, setCards] = useState<CardInterface[]>(cardsInit);
    const [activeFlippuh, setActiveFlippuh] = useState(0);

    const handleFlippuh = (item: CardInterface) => {
        console.log('item received in handleFlippuh: ;', item);
        if (!activeFlippuh) {
            setCards(cards => {
                return cards.map(c => {
                    if (c.id === item.id) {
                        return {
                            ...c,
                            flippuh: true
                        }
                    } else {
                        return c;
                    }
                })
            });
            setActiveFlippuh(item.number);
        } else {
            if (activeFlippuh === item.number) {
                setCards(cards => {
                    return cards.map(c => {
                        if (c.id === item.id) {
                            return {
                                ...c,
                                flippuh: true
                            }
                        } else {
                            return c;
                        }
                    })
                });
            } else {
                setCards(cards => {
                    return cards.map(c => {
                        if (c.number === item.number || c.number === activeFlippuh) {
                            return { ...c, flippuh: false }
                        } else {
                            return c;
                        }
                    })
                })
            }
            setActiveFlippuh(0);
        }
    }
    const cardsTwoRow = cards;
    return (
        <View style={styles.cardContainer}>
            <FlatList
                data={cardsTwoRow}
                keyExtractor={(cardItem: CardInterface, idx: number) => cardItem.id.toString()}
                renderItem={RenderCardItemGenerator(flippedNums, handleFlippuh)}
                horizontal
            />
        </View>
    );
}
