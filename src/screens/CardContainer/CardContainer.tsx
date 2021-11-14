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

interface CardContainerProps {}
export const CardContainer = (props: CardContainerProps) => {
    const [cards, setCards] = useState<CardInterface[]>(cardsInit);
    return (<View />);
}
