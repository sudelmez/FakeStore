/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, Text, Image, ScrollView } from 'react-native';
import styles from './detail_view.style';

function DetailView({ route }) {
    const { item } = route.params;
    return (
        <SafeAreaView>
            <ScrollView>
                <Text style={styles.title}>{item.title}</Text>
                <Image style={styles.image}
                    source={{
                        uri: item.image,
                    }}
                />
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.price}>{item.price}</Text>
            </ScrollView>

        </SafeAreaView>
    );
}

export default DetailView;