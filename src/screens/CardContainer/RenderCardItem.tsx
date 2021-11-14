// external deps
import React from 'react';
import {
    ListRenderItem,
    TouchableOpacity
} from 'react-native';
// app deps
import { Card } from '../../components/Card/Card';
// local deps
import {
    CardInterface
} from './cardsData';

export const RenderCardItemGenerator = (
    flippedNums: Set<number>,
    handleFlippuh: (item: CardInterface) => void
): ListRenderItem<CardInterface>  => ({ item }) => {

    return (
        <TouchableOpacity
            onPress={() => handleFlippuh(item)}
        >
            <Card
                flipped={item.flippuh}
                number={item.number}
            />
        </TouchableOpacity>
    )
}
