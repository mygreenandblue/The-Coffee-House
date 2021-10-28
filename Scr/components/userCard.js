import React from 'react'
import { Image, ImageBackground, View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function UserCard() {
    return (
        <View style={styles.userInfo}>
            <TouchableOpacity>
                <ImageBackground source={require('../img/backgroundCodeUser.png')} resizeMode="contain">
                <View style={styles.addPoint}>
                    <Ionicons name="chevron-down-outline" size={20} color="#FFF" />
                    <Text style={{color: '#FFF'}}>Tích điểm</Text>
                </View>
                <Text style={[styles.codeInfo, {fontSize: 18, fontWeight: 'bold',}]}>Cong Giap</Text>
                <Text style={[styles.codeInfo,{marginBottom: 24}]}>0 BEAN</Text>
                <View style={styles.code}>
                    <Image source={require('../img/barcode.gif')} style={styles.barcode} />
                    <Text style={{textAlign: 'center', margin: 10}}>M161516289</Text>
                </View>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    userInfo: {
        paddingHorizontal: 8,
        backgroundColor: '#ff9e00',
        borderRadius: 16,
    },
    addPoint: {
        padding: 8,
        width: 100,
        left: 200,
        color: '#FFF',
        backgroundColor: '#ff6d00',
        borderWidth: 1,
        borderTopWidth: 0,
        borderColor: '#CCC',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        flexDirection: 'row',
    },
    codeInfo: {
        marginLeft: 8,
        color: '#FFF',
    },
    barcode: {
        width: 220,
        height: 40,
        alignSelf: 'center',
    },
    code: {
        padding: 16,
        marginVertical: 16,
        marginHorizontal: 8,
        backgroundColor: '#FFF',
        height: 100,
        borderRadius: 10,
    },
})