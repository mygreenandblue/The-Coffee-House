import React from 'react'
import { Dimensions, FlatList, Image, ImageBackground, View, Text, TouchableOpacity, SafeAreaView, ScrollView, } from 'react-native'
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import styles from '../styles/homeStyle'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Container from '../components/container';

const { WIDTH, HEIGHT } = Dimensions.get('window')

const bannerList = [
    {
        id: 1,
        photo: 'https://feed.thecoffeehouse.com//content/images/2021/10/BANNER-APP.jpg',
        title: 'vui có bạn - tươi trẻ có đôi',
        date: 'Đến 12/10',
    },
    {
        id: 2,
        photo: 'https://feed.thecoffeehouse.com//content/images/2021/10/1200x1200.png',
        title: 'cần món nước ngon, nhà & shoppee khao ngay deal hot',
        date: 'Đến 11/10',
    },
    {
        id: 3,
        photo: 'https://feed.thecoffeehouse.com//content/images/2021/10/APP-NEWS-TUNGTANG.jpg',
        title: 'đến hẹn lại lên - xuất chiêu deal hot',
        date: 'Đến 16/10',
    },
    {
        id: 4,
        photo: 'https://feed.thecoffeehouse.com//content/images/2021/10/APP-NEWS-khoi-dau.jpg',
        title: 'khởi đầu mới - ưu đãi cực hời',
        date: 'Đến 15/10',
    },
    {
        id: 5,
        photo: 'https://feed.thecoffeehouse.com//content/images/2021/10/02.jpg',
        title: 'sản phầm mới: chai fresh - cho ngày dài trọn vị',
        date: 'Đến 22/10',
    },
    {
        id: 6,
        photo: 'https://feed.thecoffeehouse.com//content/images/2021/10/NEWS-KETNOI-1029x513.jpg',
        title: 'đã lâu không gặp nhà khao 30%',
        date: 'Đến 24/10',
    },
    {
        id: 7,
        photo: 'https://feed.thecoffeehouse.com//content/images/2021/10/h-nh-m--b-n.jpg',
        title: 'the coffee house có phiên bản mới dành riêng cho tp.hcm',
        date: 'Đến 30/10',
    },
    {
        id: 8,
        photo: 'https://feed.thecoffeehouse.com//content/images/2021/09/APP-NEWS-2-2.jpg',
        title: 'ưu đãi cà phê ngon chỉ từ 19k',
        date: 'Đến 28/10',
    },
]

const renderItem=({ item }) => (
    <View>
        <TouchableOpacity>
            <Image
            style={ styles.banner }
            source={{ uri: item?.photo }}
            />
            <View>
                <Text numberOfLines={2} ellipsizeMode= 'tail' style={ styles.title }>{ item?.title }</Text>
                <View style ={{ flexDirection: 'row' }}>
                   
                    <Text style={ styles.date }>{ item?.date }</Text>
                </View>
            </View>
        </TouchableOpacity>
    </View>
);

export default function HomeLogin({ navigation }) {
    return (
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{backgroundColor: '#e9d8a6'}}>
                    <View style={{ backgroundColor:'#EEE',  borderRadius: 20, width: 380, height: 320, marginTop: 50, marginBottom: 50, alignSelf: 'center'}}>
                        <Text style={{ alignSelf: 'center', fontSize: 18, fontWeight: 'bold', color: '#000', marginTop: 25 }}>Đăng Nhập</Text>   
                        <Text style={{ alignSelf: 'center', fontWeight: '500', color: '#000', margin: 5}}>Sử dụng app để tích điểm và đổi những quà ưu đãi{"\n"}            chỉ dành riêng cho thành viên bạn nhé !</Text>    
                        <TouchableOpacity style={{ backgroundColor:'#e87800', borderRadius: 8, width: 180, height: 40, alignSelf: 'center', marginTop: 10 }}  onPress={() => navigation.navigate('Login')} >
                            <Text style={{ color: '#fff', textAlign: 'center', padding: 8, fontWeight: 'bold', fontSize: 16 }}>Đăng Nhập</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ borderColor: '#aaa', borderWidth: 1, borderRadius: 8, width: 330, height: 50, alignSelf: 'center', marginTop: 100, flexDirection: 'row' }}>
                            <Text style={{ color: '#000', padding: 10, fontWeight: '500', }}>The Coffe House's Reward</Text>
                            <Ionicons name="chevron-forward-outline" size={20} color='#000'
                                      style={{ padding: 10, marginLeft: 90 }}/>
                        </TouchableOpacity>
                    </View>
                    <View style={ styles.content }>
                        <View style={ styles.option }>
                            <TouchableOpacity style={{ marginBottom: 15, marginTop: 10 }}>
                            <Image
                                style={ styles.icon }
                                source={require( '../img/Delivery.png' )}/>
                                <Text style={{ color: '#000', textAlign: 'center' }}>Giao hàng</Text>
                            </TouchableOpacity>
                            <View style={ styles.line }></View>
                            <TouchableOpacity style={{ marginBottom: 15, marginTop: 10 }}>
                            <Image
                                style={ styles.icon }
                                source={require( '../img/pickup.png' )}/>
                                <Text style={{ color: '#000', textAlign: 'center' }}>Mang đi</Text>
                            </TouchableOpacity>
                        </View>
                        <View><Container/></View>
                        <Text style={ styles.titleDiscovery }>Khám phá thêm </Text>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={ styles.dragDiscovery }>
                                <TouchableOpacity>
                                    <Text style={[ styles.btnDiscovery, styles.activeDiscovery ]}>Ưu đãi đặc biệt</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={ styles.btnDiscovery }>Cập nhật từ nhà</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={ styles.btnDiscovery }>#CoffeeLover</Text>
                                </TouchableOpacity> 
                                <TouchableOpacity>
                                    <Text style={ styles.btnDiscovery }>Quà tặng từ nhà</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                        <FlatList
                            data={ bannerList }
                            renderItem={ renderItem }
                            keyExtractor={ item => item.id }
                            numColumns={2}
                            horizontal={false}
                            style={{ marginBottom: 10 }}
                            columnWrapperStyle={{ flex: 1, justifyContent: "space-around" }}
                        />
                    </View>

                </View> 
            </ScrollView>
        </SafeAreaView>  
    )
}