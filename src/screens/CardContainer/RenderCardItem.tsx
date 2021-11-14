// external deps
import React from 'react';
import {
    ListRenderItem,
    View
} from 'react-native';
// app deps
import { Card } from '../../components/Card/Card';
// local deps
import {
    CardInterface
} from './cardsData';

export const RenderCardItem: ListRenderItem<CardInterface> = ({ item }) => {

    return (
        <Card
            flipped={item.flippuh}
            number={item.number}
        />
    )
}
