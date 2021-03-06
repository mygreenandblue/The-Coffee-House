import { StyleSheet, Dimensions } from 'react-native'

const { WIDTH, HEIGHT } = Dimensions.get('window')

const styles = StyleSheet.create({
    codeUser: {
        backgroundColor: '#ff9e00',
        marginHorizontal: 16,
        marginVertical: 16,
        marginBottom: 100,
        marginTop: 50,
        paddingHorizontal: 8,
        borderRadius: 20,
    },
    addPoint: {
        width: 100,
        padding: 8,
        left: 200,
        color: '#FFF',
        backgroundColor: '#e87800',
        borderWidth: 1,
        borderTopWidth: 0,
        borderColor: '#CCC',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        flexDirection: 'row',
    },
    codeInfo: {
        color: '#FFF',
        marginLeft: 8,
    },
    barcode: {
        width: 220,
        height: 40,
        alignSelf: 'center',
    },
    code: {
        backgroundColor: '#FFF',
        height: 100,
        padding: 16,
        marginVertical: 16,
        marginHorizontal: 8,
        borderRadius: 10,
    },
    content: {
        backgroundColor: '#FFF', 
        borderTopLeftRadius: 16, 
        borderTopRightRadius: 16,
        shadowColor: "#000",
        shadowOpacity: 1,
        elevation: 24,
    },
    option: {
        borderWidth: 1,
        borderColor: '#CCC',
        borderRadius: 8,
        marginHorizontal: 16,
        marginVertical: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    icon: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignContent: 'center'
    },
    line: {
        height: 80,
        alignSelf: 'center',
        borderRightWidth: 1,
        borderRightColor: '#CCC',
    },
    dragBanner: {
        marginHorizontal: 16,
        borderRadius: 8,
        shadowColor: "#EEE",
        shadowOpacity: 0.4,
        elevation: 8,
    },
    bannerImage: {
        borderRadius: 8,
        width: '100%',
        height: 200, 
    },

    wrap: {
        width: WIDTH,
        height: 250,
    },

    titleDiscovery: {
        color: '#000',
        fontSize: 20,
        fontWeight: '500',
        marginTop: 48,
        marginHorizontal: 16,
        marginVertical: 8,
    },
    dragDiscovery: {
        flexDirection: 'row', 
        marginHorizontal: 16, 
        marginVertical: 10,},
    btnDiscovery: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        color: '#000',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    activeDiscovery: {
        color: '#FF7900',
        backgroundColor: '#EEE',
        borderRadius: 20,
    },
    banner: {
        width: 150,
        height: 150,
        borderRadius: 8,
    },
    title: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        marginVertical: 8,
        color: '#000',
        width: 150,
    },
    date: {
        paddingLeft: 8,
        marginBottom: 16,
    }
})

export default styles;

