// external deps
import React from 'react';
import {
    ListRenderItem,
    TouchableOpacity,
    View
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
): ListRenderItem<CardInterface[]>  => ({ item }) => {

    return (
        <View>
        <TouchableOpacity
            onPress={() => handleFlippuh(item[0])}
        >
            <Card
                flipped={item[0].flippuh}
                number={item[0].number}
            />
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => handleFlippuh(item[1])}
        >
            <Card
                flipped={item[1].flippuh}
                number={item[1].number}
            />
        </TouchableOpacity>
        </View>
    )
}
