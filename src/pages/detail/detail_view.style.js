/* eslint-disable prettier/prettier */
import { StyleSheet,Dimensions } from 'react-native';
const screenHight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightgrey',
    },
    image: {
        padding: screenHight/4,
        resizeMode: 'stretch',
        borderRadius: 20,
    },
    description: {
        padding: 10,
        color: 'black',
        fontWeight: 'bold',
    },
    title: {
        padding: 10,
        color: 'black',
        fontWeight: 'bold',
        fontSize:20,
    },
    price: {
        paddingHorizontal: 10,
        color: 'grey',
    },
}
);
export default styles;