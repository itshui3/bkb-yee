// external deps
import React, { useState } from 'react';
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
import { RenderCardItem } from './RenderCardItem';

interface CardContainerProps {}
export const CardContainer = (props: CardContainerProps) => {
    const [cards, setCards] = useState<CardInterface[]>(cardsInit);
    const cardsTwoRow = cards;
    return (
        <View style={styles.cardContainer}>
            <FlatList
                data={cardsTwoRow}
                keyExtractor={(cardItem: CardInterface, idx: number) => cardItem.id.toString()}
                renderItem={RenderCardItem}
                horizontal
            />
        </View>
    );
}
