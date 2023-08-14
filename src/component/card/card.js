/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './card.style';

const CardComponent = (props) => {
    const handlePress = () => {
        console.log('Kart tıklandı!');
        if (props.onPress) props.onPress();
    };

    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={styles.container}>
                <Text style={styles.title}>{props.title}</Text>
                <Image style={styles.image}
                    source={{
                        uri: props.uri,
                    }}
                />
                <Text style={styles.description}>{props.description}</Text>
                <Text style={styles.price}>{props.price}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default CardComponent;
