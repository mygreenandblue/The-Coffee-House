import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    codeView: {
        marginHorizontal: 16,
        marginVertical: 16,
        backgroundColor: '#FFF',
        borderRadius: 16,
    },
    btnList: {
        paddingHorizontal: 12,
        paddingVertical: 16,
        flexDirection: 'row',
        flexWrap: 'wrap',
       
    },
    btnItem: {
        margin: 4,
        padding: 16,
        width: 185,
        backgroundColor: '#FFF',
        borderRadius: 8,
    },
    btnInfo: {
        marginTop: 8,
        color: '#000',
        fontWeight: 'bold',
    },
    titleContent: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
    },
    btnMore: {
        padding: 8,
        backgroundColor: '#E7DAC9',
        color: '#FF6600',
        fontWeight: 'bold',
        borderRadius: 36,
    },
    
})

export default styles;