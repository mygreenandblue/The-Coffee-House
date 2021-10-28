import React from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Menu() {
    return (
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: '#EEE' }}>
                <View style={{padding: 15}}>
                    <Text style={styles.title}>Tiện ích</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
                        <TouchableOpacity style={styles.utilities}>
                            <Ionicons name="document-text-outline" size={25} color="orange" style={styles.uticon}/>
                            <Text style={styles.utTitle}>Lịch sử đơn hàng</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.utilities}>
                            <Ionicons name="md-create" size={25} color="purple" style={styles.utContent}/>
                            <Text style={styles.utTitle}>Điểu khoản</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{ backgroundColor: '#fff',  borderRadius: 8, padding: 20, marginTop: 8 }}>
                        <Ionicons name="musical-note" size={25} color="green" style={styles.utContent}/>
                        <Text style={styles.utTitle}>Nhạc đang phát</Text>
                    </TouchableOpacity>
                    <Text style={styles.title}> Hỗ trợ</Text>
                    <TouchableOpacity style={{ backgroundColor: '#fff',  borderRadius: 8, padding: 15, marginTop: 8, flexDirection: 'row' }}>
                        <Ionicons name="star-outline" size={20} color="#000" style={styles.utContent}/>
                        <Text style={ styles.support }>Đánh giá đơn hàng</Text>
                        <Ionicons name="chevron-forward-outline" size={12} color='#000' style={{ flexDirection: 'column', marginLeft: 180, alignSelf: 'center' }}/>
                    </TouchableOpacity>
                    <View style={{  borderColor: 'grey', borderWidth: 0.5, marginLeft: 5, marginRight: 5 }} />
                    <TouchableOpacity style={{ backgroundColor: '#fff',  borderRadius: 8, padding: 15, flexDirection: 'row' }}>
                        <Ionicons name="star-outline" size={20} color="#000" style={styles.utContent}/>
                        <Text style={ styles.support }>Đánh giá đơn hàng</Text>
                        <Ionicons name="chevron-forward-outline" size={12} color='#000' style={{ flexDirection: 'column', marginLeft: 180, alignSelf: 'center' }}/>
                    </TouchableOpacity>
                    <Text style={styles.title}>Tài khoản</Text>
                    <TouchableOpacity style={{ backgroundColor: '#fff',  borderRadius: 8, padding: 15, marginTop: 8, flexDirection: 'row' }}>
                        <Ionicons name="person-outline" size={20} color="#000" style={styles.utContent}/>
                        <Text style={ styles.support }>Thông tin cá nhân</Text>
                        <Ionicons name="chevron-forward-outline" size={12} color='#000' style={{ marginLeft: 185, alignSelf: 'center' }}/>
                    </TouchableOpacity>
                    <View style={{  borderColor: 'grey', borderWidth: 0.5, marginLeft: 5, marginRight: 5 }} />
                    <TouchableOpacity style={{ backgroundColor: '#fff',  borderRadius: 8, padding: 15, flexDirection: 'row' }}>
                        <Ionicons name="bookmark-outline" size={20} color="#000" style={styles.utContent}/>
                        <Text style={ styles.support }>Địa chỉ đã lưu</Text>
                        <Ionicons name="chevron-forward-outline" size={12} color='#000' style={{ marginLeft: 210, alignSelf: 'center' }}/>
                    </TouchableOpacity>
                    <View style={{  borderColor: 'grey', borderWidth: 0.5, marginLeft: 5, marginRight: 5 }} />
                    <TouchableOpacity style={{ backgroundColor: '#fff',  borderRadius: 8, padding: 15, flexDirection: 'row' }}>
                        <Ionicons name="settings-outline" size={20} color="#000" style={styles.utContent}/>
                        <Text style={ styles.support }>Cài đặt</Text>
                        <Ionicons name="chevron-forward-outline" size={12} color='#000' style={{ marginLeft: 250, alignSelf: 'center' }}/>
                    </TouchableOpacity>
                    <View style={{  borderColor: 'grey', borderWidth: 0.5, marginLeft: 5, marginRight: 5 }} />
                    <TouchableOpacity style={{ backgroundColor: '#fff',  borderRadius: 8, padding: 15, flexDirection: 'row' }}>
                        <Ionicons name="log-out-outline" size={20} color="#000" style={styles.utContent}/>
                        <Text style={ styles.support }>Đăng xuất</Text>
                        <Ionicons name="chevron-forward-outline" size={12} color='#000' style={{ marginLeft: 231, alignSelf: 'center' }}/>
                    </TouchableOpacity>

                </View> 
            </ScrollView>
        </SafeAreaView>  
    )
}
const styles = StyleSheet.create({
    title: {
        fontSize: 18, 
        color: 'black', 
        marginTop: 15,
        fontWeight: '500'
    },
    utilities: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 12, width: 186
    },
    uticon: {

    },
    utTitle: {
        color: '#000',
        marginTop: 10
    },
    support: {
        textAlign: 'center',
        color: '#000',
        marginLeft: 15
    },

})
