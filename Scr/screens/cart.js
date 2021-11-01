import React from 'react'
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'


export default function Cart() {
    const [text, onChangeText] = React.useState("Không");
    return (
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ backgroundColor: '#c0c0c0' }}>
                    <View style={ styles.view }>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.title}>Giao hàng tận nơi</Text>
                            <TouchableOpacity style={styles.changeAddress}>
                                <Text style={{ color: '#e50', fontWeight:'bold', fontSize: 10, alignSelf: 'center' }}>THAY ĐỔI</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{ color: '#000', fontWeight: 'bold', marginTop: 20, }}> Hà Nội</Text>
                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                            <Text style={styles.text}>Hanoi, Hoàn Kiếm, Hanoi</Text>
                            <Ionicons name="chevron-forward-outline" size={12} color='#000' />
                        </TouchableOpacity>
                        <TextInput onChangeText={onChangeText} value={text}/>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TouchableOpacity>
                                <Text style={styles.text}>Giap Cong</Text>
                                <Text>0386209000</Text>
                            </TouchableOpacity>
                            <View style= {{ height: 40, borderColor: '#ccc', borderWidth: 0.2, alignSelf: 'center', marginLeft: 106 }} />
                            <TouchableOpacity style={{ marginRight: 68 }}>
                                <Text>15-30 phút</Text>
                                <Text style={styles.text}>Càng sớm càng tốt</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                            <View style={{ height: 1, width: 185, borderRadius: 1, borderWidth: 1, borderColor: 'grey', borderStyle: 'dotted' }} />
                            <View style={{ height: 1, width: 185, borderRadius: 1, borderWidth: 1, borderColor: 'grey', borderStyle: 'dotted' }} />
                        </View>
                    </View>
                    <View style={styles.view}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.title}>Các sản phẩm đã chọn</Text>
                            <TouchableOpacity style={styles.addProduct}>
                                <Text style={{ color: '#e50', fontWeight:'bold', fontSize: 10, alignSelf: 'center' }}>+ THÊM SẢN PHẨM</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                            <View style={{ flexDirection: 'row'}}>
                                <Ionicons name="pencil-sharp" size={14} color='#000' style={{ alignSelf: 'center' }} />
                                <View style={{ marginLeft: 15}}>
                                    <Text style={styles.text}>2 x Cà phê sữa đá</Text>
                                    <Text>Vừa</Text>
                                </View>
                            </View>
                            <Text style={styles.text}>70.000đ</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.view}>
                        <Text style={styles.title}>Tổng cộng</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                            <Text style={styles.text}>Thành tiền</Text>
                            <Text style={styles.text}>70.000đ</Text>
                        </View>
                        <View style={{  borderColor: 'grey', borderWidth: 0.5, marginLeft: 5, marginTop: 10, marginBottom: 10 }} />
                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                            <Text style={{ color: 'blue' }}>Chọn khuyến mãi</Text>
                            <Ionicons name="chevron-forward-outline" size={12} color='#000' />
                        </TouchableOpacity>
                        <View style={{  borderColor: 'grey', borderWidth: 0.5, marginLeft: 5, marginTop: 10, marginBottom: 10 }} />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontWeight: 'bold', color: '#000' }}>Số tiền thanh toán</Text>
                            <Text style={{ fontWeight: 'bold', color: '#000' }}>70.000đ</Text>
                        </View>
                    </View>
                    <View style={styles.view}>
                        <Text style={styles.title}>Thanh toán</Text>
                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                            <Text style={{ color: 'blue', marginLeft: 10 }}>Chọn phương thức thanh toán</Text>
                            <Ionicons name="chevron-forward-outline" size={12} color='#000' />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{ backgroundColor: '#fff', flexDirection: 'row', marginTop: 12, padding: 10, marginBottom: 12 }} >
                        <Ionicons name="trash-outline" size={12} color='red' style={{ alignSelf: 'center' }}/>
                        <Text style={{ color: 'red', marginLeft: 10 }}>Xóa đơn hàng</Text>
                    </TouchableOpacity>
                    <View style={{ backgroundColor: '#e60', padding: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={{ color: '#fff' }}>Giao hàng tân nơi - 2 sản phẩm</Text>
                            <Text style={{ fontWeight: 'bold', color: '#fff' }}>70.000đ</Text>
                        </View>
                        <TouchableOpacity style={{ backgroundColor: '#fff', width: 80, height: 25, borderRadius: 12.5, alignSelf: 'center' }}>
                            <Text style={{ color: '#e50', fontWeight:'bold', fontSize: 10, padding: 5, alignSelf: 'center' }}>ĐẶT HÀNG</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    view: {
        backgroundColor: '#fff',
        padding: 8,
        marginTop: 12
    },
    text: { color: '#000' },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        
    },
    changeAddress: {
        borderRadius: 12.5,
        width: 60,
        padding: 5,
        backgroundColor: '#e6d5a5',
    },
    addProduct: {
        borderRadius: 12.5,
        width: 120,
        padding: 5,
        backgroundColor: '#e6d5a5',
    },
})