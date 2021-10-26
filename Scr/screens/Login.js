import React from 'react'
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Login({ navigation }) {
    
    return (
        <View>
            <Image source={require( '../img/backgroundLogin.png')} 
                   style={{ width: '100%', height: '25%' }}/>
            <View>
                <View style={{ padding: 30 }}>
                    <Text style={{ color: '#000', fontWeight: '500', textAlign: 'center', fontSize: 16 }}> Chào mừng bạn đến với</Text>
                    <Image source={require('../img/logo-black.png')}
                           style={{ width: "70%", height: 19, alignSelf: 'center', marginTop: 10 }}/>
                    <View style={styles.SectionStyle}>
                        <Image source={require('../img/VietNamFlag.png')} style={styles.ImageStyle}/>
                        <Text style={{ color: '#000', fontWeight: '400', marginLeft: 5, fontSize: 16 }}>+84</Text>
                        <View style={{ height: 25, alignSelf: 'center', borderRightWidth: 1, borderRightColor: '#CCC', margin: 20 }} ></View>
                        <TextInput style={{ flex: 1, fontSize: 16 }} placeholder="Nhập số điện thoại"/>
                    </View>
                    <TouchableOpacity style={styles.signIn} onPress={() => navigation.navigate('HomeA')}>
                        <Text style={{ fontSize: 16, color: '#fff' }}>Đăng nhập</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection: 'row', alignItems: 'center', margin: 15}}>
                        <View style={{flex: 1, height: 1, backgroundColor: 'grey'}} />
                        <Text style={{width: 50, textAlign: 'center', fontWeight: 'bold'}}>HOẶC</Text>
                        <View style={{flex: 1, height: 1, backgroundColor: 'grey'}} />
                    </View>
                    <TouchableOpacity style={styles.Apple}>
                        <Ionicons name="logo-apple" size={20} color="#fff"/>  
                        <Text style={{ fontSize: 16, color: '#fff', marginLeft: 5 }}>Tiếp tục bằng Apple</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Facebook}>
                        <Ionicons name="ios-logo-facebook" size={20} color="#fff"/> 
                        <Text style={{ fontSize: 16, color: '#fff', marginLeft: 5 }}>Tiếp tục bằng Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Google}>
                        <Image source={{uri: 'data:image/png;base64,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'}}
                               style={{ width: 20, height: 20 }} /> 
                        <Text style={{ fontSize: 16, color: '#000', marginLeft: 5 }}>Tiếp tục bằng Google</Text>
                    </TouchableOpacity>
                    <Text style={{ fontWeight: '400', fontSize: 16, color: 'black', textAlign: 'center', marginTop: 10 }}>Tiếng Việt</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 50,
        borderRadius: 8,
        marginTop: 20,
    },
    ImageStyle: {
        padding: 10,
        marginLeft: 15,
        height: 20,
        width: 20,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    signIn: {
        borderRadius: 8,
        alignItems: 'center',
        backgroundColor: 'grey',
        padding: 15,
        marginTop: 10
    },
    Apple: {
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        padding: 12,
        flexDirection: 'row'
    },
    Facebook: {
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
        padding: 12,
        marginTop: 5
    },
    Google: {
        borderWidth: 1,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 12,
        marginTop: 5
    }
})


