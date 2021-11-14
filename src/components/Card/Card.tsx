// external deps
import React from 'react';
import {
    View,
    Text
} from 'react-native';
// local deps
import {
    CardStyles as styles
} from './Card.style';

interface CardProps {
    flipped: boolean;
    number: number;
}
export const Card = (props: CardProps) => {
    const { flipped, number } = props;

    return (
        <View
            style={[
                styles.cardContainer,
                flipped && styles.cardFlippuh
            ]}
        >
            {flipped && (
                <Text style={styles.cardText}>
                {number}
                </Text>
            )}
        </View>
    )
}