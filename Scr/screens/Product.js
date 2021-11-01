import React, { useState } from "react";
import { Image, View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
    

function Product({ navigation }) {
const [count, setCount] = useState(1);
    const onPress1 = () => { setCount(count + 1) };
    const onPress2 = () => { setCount(count - 1) };
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{backgroundColor: '#EEE'}}>
                    <View style={{backgroundColor: '#FFF'}}>
                        <Image style={styles.image} source={require('../img/matcha.jpg')}/>
                        <View>
                            <View style={{ padding: 16, flexDirection: 'row', justifyContent: 'space-between'}}>
                                <View>
                                    <Text style={styles.Name}>Matcha Đá Xay</Text>
                                    <Text style={styles.price}>59.000đ</Text>
                                </View>
                                <TouchableOpacity>
                                    <Ionicons name="heart-outline" size={20} color="#000" style={styles.icon} />
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.direction}>Matcha thanh, nhẫn, và đắng nhẹ được nhân đôi sảng khoaiskhi uống lạnh.
                            Nhấn nhá thêm những nét bùi béo của kem và sữa. Gây thương nhớ vô cùng!</Text>
                        </View>
                    </View>

                    <View style={styles.option}>
                        <Text style={styles.title}>Size</Text>
                        <Text style={styles.desc}>Chọn 1 loại size</Text>
                    </View>
                    <View style={{ flexDirection: 'row', backgroundColor: '#fff', justifyContent: 'space-between' ,padding: 10 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity  style={{ borderWidth: 1, borderColor: '#000', alignSelf: 'center',
                                               width: 10, height: 10, borderRadius: 10, marginLeft: 16 }}></TouchableOpacity>
                        <Text style={{ marginLeft: 6, color: '#000', marginBottom: 1 }}>Vừa</Text>
                        </View>
                        <Text style={{ marginRight: 20, color: '#000' }}>+ 0đ</Text>
                    </View>
                    <View style={{  borderColor: 'grey', borderWidth: 0.5, marginLeft: 30 }} />
                    <View style={{ flexDirection: 'row', backgroundColor: '#fff', justifyContent: 'space-between' ,padding: 10 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity  style={{ borderWidth: 1, borderColor: '#000', alignSelf: 'center',
                                               width: 10, height: 10, borderRadius: 10, marginLeft: 16 }}></TouchableOpacity>
                        <Text style={{ marginLeft: 6, color: '#000', marginBottom: 1 }}>Lớn</Text>
                        </View>
                        <Text style={{ marginRight: 20, color: '#000' }}>+ 6000đ</Text>
                    </View>

                    <View style={styles.option}>
                        <Text style={styles.title}>Yêu cầu khác</Text>
                        <Text style={styles.desc}>Những tùy chọn khác</Text>
                        <TextInput style={styles.input} placeholder="Thêm ghi chú"/>
                    </View>

                    <View style={[styles.option, {paddingTop: 0}]}>
                        <View style={[styles.addProduct, {marginHorizontal: 90}]}>
                            <TouchableWithoutFeedback onPress={onPress2}>
                                <Text style={styles.addMore}>-</Text>
                            </TouchableWithoutFeedback>
                            <Text style={styles.addMoreValue}>{ count }</Text>
                            <TouchableWithoutFeedback onPress={onPress1}>
                                <Text style={styles.addMore}>+</Text>
                            </TouchableWithoutFeedback>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                            <Text style={styles.addToCart}>Chọn sản phẩm</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    image: {
        alignSelf: 'center',
        height: 360,
        resizeMode: 'contain',
    },
    name: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold'
    },
    price: {
        fontWeight: 'bold'
    },
    icon: {
        top: 12,
        right: 12,
    },
    direction: {
        paddingHorizontal: 16,
        color: '#000',
    },
    title: {
        fontSize: 16,
        color: '#000',
        fontWeight: 'bold',
    },
    option: {
        marginTop: 8,
        padding: 16,
        backgroundColor: '#FFF'
    },
    desc: {
        fontSize: 12,
    },
    input: {
        marginTop: 16,
        paddingLeft: 16,
        height: 40,
        borderWidth: 0.5,
        borderRadius: 8,
    },
    addProduct: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        
    },
    addMore: {
        margin: 8,
        padding: 4,
        width: 36,
        height: 36,
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        borderRadius: 8,
        backgroundColor: '#EEE'
    },
    addMoreValue: {
        margin: 8,
        padding: 4,
        width: 36,
        height: 36,
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        borderRadius: 8,
        backgroundColor: '#fff'
    },
    addToCart: {
        padding: 12,
        backgroundColor: '#FF6600',
        color: '#FFF',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        borderRadius: 16,
        marginTop: 5
    }
})
export default Product;