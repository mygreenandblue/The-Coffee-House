import React from 'react'
import { Dimensions, Image, View, Text, TouchableOpacity, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const { HEIGHT, WIDTH } = Dimensions.get('window');

export default function ResDetail({navigation}) {

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{backgroundColor: '#FFF'}}>
                    <Image
                        style={styles.locationImages}
                        source={{ uri: 'https://minio.thecoffeehouse.com/image/admin/store/5b21f8cb1acd4d02032668dd_nguyen_20khanh_20toan.jpeg' }}/>
                    <View style={styles.title}>
                        <Text style={styles.name}>the coffee house</Text>
                        <Text style={styles.store}>01 Nguyễn Gia Thiều</Text>
                        <Text style={{fontSize: 12}}>Giờ mở cửa: 7:00 - 22:00</Text>
                    </View>

                    <View style={{margin: 16}}>
                        <View style={styles.info}>
                            <TouchableOpacity>
                                <Ionicons name="navigate-outline" size={20} color="#000" style={styles.icon} />
                            </TouchableOpacity>
                            <Text style={styles.infoRes} numberOfLines={2} ellipsizeMode= 'tail'>
                               01 Nguyễn Gia Thiều, Thành phố Bắc Ninh, Bắc Ninh, Việt Nam</Text>
                        </View>

                        <View style={styles.info}>
                            <TouchableOpacity>
                                <Ionicons name="heart-outline" size={20} color="#000" style={styles.icon} />
                            </TouchableOpacity>
                            <Text style={styles.infoRes} >Thêm vào danh sách yêu thích</Text>
                        </View>

                        <View style={styles.info}>
                            <TouchableOpacity>
                                <Ionicons name="call" size={20} color="#000" style={styles.icon} />
                            </TouchableOpacity>
                            <Text style={styles.infoRes} >Liên hệ</Text>
                        </View>

                        <View style={styles.info}>
                            <TouchableOpacity>
                                <Ionicons name="arrow-redo-outline" size={20} color="#000" style={styles.icon} />
                            </TouchableOpacity>
                            <Text style={styles.infoRes}>Chia sẻ với bạn bè</Text>
                        </View>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('Order')} style={styles.button}>
                        <Text style={[styles.btnName, {fontWeight: 'bold'}]}>Đặt sản phẩm</Text>
                        <Text style={styles.btnName}>Tự đến lấy tại cửa hàng này</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
        )
}

const styles = StyleSheet.create({
    locationImages: {
        width: WIDTH,
        height: 320,
        resizeMode: 'cover',
    },
    title: {
        padding: 16,
        borderBottomWidth: 0.5,
        borderBottomColor: '#CCC'
    },
    button: {
        margin: 16,
        padding: 16,
        backgroundColor: '#FF7900',
        borderRadius: 8,
    },
    btnName: {
        color: '#FFF',
        textAlign: 'center'
    },
    name: {
        fontSize: 12,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    store: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold'
    },
    info: {
        marginVertical: 8,
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    icon: {
        padding: 12,
        justifyContent: 'center',
        alignContent: 'center',
        width: 46,
        height: 46,
        backgroundColor: '#EEE',
        borderRadius: 8,
    },
    infoRes: {
        width: 340,
        textAlignVertical: 'center',
        color: '#000',
        borderBottomWidth: 1,
        borderBottomColor: '#EEE',
        marginLeft: 10
    }
})