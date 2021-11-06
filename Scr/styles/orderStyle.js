import { StyleSheet, } from 'react-native'
const styles = StyleSheet.create({
    headerBar: {
        backgroundColor: '#FFF',
        paddingHorizontal: 16,
        flexDirection: 'row'
    },
    icon: {
        width: 40,
        height: 40,
        marginRight: 8,
        marginBottom: 15
    },
    txtShipping: {
        color: '#000',
        fontWeight: 'bold',
        paddingTop: 2,
    },
    input: {
        width: 235,
        height: 40,
        paddingLeft: 16,
        backgroundColor: '#EEE',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    searchBar: {width: 40,
        height: 40, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EEE', borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    ionIcons: {
        width: 40,
        height: 40,
        marginLeft: 12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EEE',
        borderRadius: 10,
    },
    groupProducts: {
        backgroundColor: '#fff',
        width: 190,
        height: 80,
        borderRadius: 12,
        marginTop: 12,
        flexDirection: 'row',
        
    },
    grTitle: {
        color: '#000',
        fontWeight: 'bold',
        alignSelf: 'center',
        marginLeft: 8
    },
    recently: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        marginHorizontal: 16,
    },
    booked: {
        backgroundColor: '#FFF',
        borderRadius: 16,
        paddingHorizontal: 16,
        paddingVertical: 16,
    },
    productItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FFF',
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 16,
        marginHorizontal: 16,
        marginBottom: 16,
    },
    title: {
        fontWeight: 'bold',
        color: '#000',
    },
    description: {
        width: 200,
        fontSize: 13,
    },
    productsImages: {
        width: 80,
        height: 80,
        borderRadius: 8,
    },
})

export default styles;
