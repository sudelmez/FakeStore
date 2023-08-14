/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';
const screenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
        width: screenWidth * 3 / 8,
        backgroundColor: 'white', borderRadius: 20, margin: 20, padding: 10,
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
    columnWrapper: {
        flexWrap: 'wrap', // This will wrap items to the next row
        justifyContent: 'space-around',
    },
}
);
export default styles;