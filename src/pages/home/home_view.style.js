/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';
// const screenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightgrey',
    },
    image: {
        padding: 60,
        resizeMode: 'stretch',
        borderRadius: 20,
    },
    description: {
        padding: 10,
        color: 'black',
        fontWeight: 'bold',
    },
    price: {
        paddingHorizontal: 10,
        color: 'grey',
    },
    columnWrapper: {
        flexWrap: 'wrap', // This will wrap items to the next row
        justifyContent: 'space-around',
    },
}
);
export default styles;