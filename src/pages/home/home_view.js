/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import styles from './home_view.style';
import axios from 'axios';
import CardComponent from '../../component/card/card';
import { useNavigation } from '@react-navigation/native'; 

function HomeView() {
    const [products, setProducts] = useState([]);
    const navigation = useNavigation();

    async function fetchDatas() {
        const response = await axios.get('https://fakestoreapi.com/products');
        console.log(response);
        setProducts(response.data);
    }

    useEffect(() => {
        fetchDatas();
    }, []);

    const renderItems = ({ item }) => {
        const handlePress = () => {
            navigation.navigate('PRODUCT DETAIL', { item }); // 'Second' ekranına item verisiyle yönlendirme
        };
        return (
            <CardComponent onPress={handlePress} uri={item.image} title={item.title} price={item.price} />
        );
    };

    const renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: '100%',
                    backgroundColor: 'black',
                }}
            />
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                ItemSeparatorComponent={renderSeparator}
                data={products}
                renderItem={renderItems}
                numColumns={2}
            />
        </SafeAreaView>
    );
}

export default HomeView;
