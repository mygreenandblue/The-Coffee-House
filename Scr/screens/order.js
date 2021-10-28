import React from 'react'
import { FlatList, Image, View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import styles from '../styles/orderStyle'
import Ionicons from 'react-native-vector-icons/Ionicons';


const productsList = [
    {
        id: 1,
        title: 'Cà Phê Sữa Đá',
        description: 'Cà phê được pha phin truyền thống kết hợp với sữa đặc tạo nên hương vị đậm đà, hài hòa giữa vị ngọt đầu lưỡi và vị đắng thanh thoát nơi hậu vị.',
        price: '32.000đ',
        photo: 'https://minio.thecoffeehouse.com/image/admin/caphe-suada--bacsiu_063797_400x400.jpg',
    },
    {
        id: 2,
        title: 'Cà Phê Sữa Nóng',
        description: 'Cà phê được pha phin truyền thống kết hợp với sữa đặc tạo nên hương vị đậm đà, hài hòa giữa vị ngọt đầu lưỡi và vị đắng thanh thoát nơi hậu vị.',
        price: '35.000đ',
        photo: 'https://minio.thecoffeehouse.com/image/admin/cfsua-nong_235317_400x400.jpg',
    },
    {
        id: 3,
        title: 'Bạc Sỉu',
        description: 'Bạc sỉu chính là "Ly sữa trắng kèm một chút cà phê". Thức uống này rất phù hợp những ai vừa muốn trải nghiệm chút vị đắng của cà phê vừa muốn thưởng thức vị ngọt béo ngậy từ sữa.',
        price: '32.000đ',
        photo: 'https://minio.thecoffeehouse.com/image/admin/caphe-suada--bacsiu_063797_400x400.jpg',
    },
    {
        id: 4,
        title: 'Bạc Sỉu Nóng',
        description: 'Bạc sỉu chính là "Ly sữa trắng kèm một chút cà phê". Thức uống này rất phù hợp những ai vừa muốn trải nghiệm chút vị đắng của cà phê vừa muốn thưởng thức vị ngọt béo ngậy từ sữa.',
        price: '35.000đ',
        photo: 'https://minio.thecoffeehouse.com/image/admin/bacsiunong_062500_400x400.jpg',
    },
    {
        id: 5,
        title: 'Cà Phê Đen Đá',
        description: 'Không ngọt ngào như Bạc sỉu hay Cà phê sữa, Cà phê đen mang trong mình phong vị trầm lắng, thi vị hơn. Người ta thường phải ngồi rất lâu mới cảm nhận được hết hương thơm ngào ngạt, phảng phất mùi cacao và cái đắng mượt mà trôi tuột xuống vòm họng.',
        price: '32.000đ',
        photo: 'https://minio.thecoffeehouse.com/image/admin/cfdenda-espressoDa_647698_400x400.jpg',
    },
    {
        id: 6,
        title: 'Cà Phê Đen Nóng',
        description: 'Không ngọt ngào như Bạc sỉu hay Cà phê sữa, Cà phê đen mang trong mình phong vị trầm lắng, thi vị hơn. Người ta thường phải ngồi rất lâu mới cảm nhận được hết hương thơm ngào ngạt, phảng phất mùi cacao và cái đắng mượt mà trôi tuột xuống vòm họng.',
        price: '35.000đ',
        photo: 'https://minio.thecoffeehouse.com/image/admin/cfden_nong_016851_400x400.jpg',
    },
    {
        id: 7,
        title: 'Caramel Macchiato Đá',
        description: 'Caramel Macchiato sẽ mang đến một sự ngạc nhiên thú vị khi vị thơm béo của bọt sữa, sữa tươi, vị đắng thanh thoát của cà phê Espresso hảo hạng và vị ngọt đậm của sốt caramel được gói gọn trong một tách cà phê.',
        price: '50.000đ',
        photo: 'https://minio.thecoffeehouse.com/image/admin/caramel-macchiato_143623_400x400.jpg',
    },
    {
        id: 8,
        title: 'Caramel Macchiato Nóng',
        description: 'Caramel Macchiato sẽ mang đến một sự ngạc nhiên thú vị khi vị thơm béo của bọt sữa, sữa tươi, vị đắng thanh thoát của cà phê Espresso hảo hạng và vị ngọt đậm của sốt caramel được gói gọn trong một tách cà phê.',
        price: '50.000đ',
        photo: 'https://minio.thecoffeehouse.com/image/admin/caramelmacchiatonong_168039_400x400.jpg',
    },
]

const renderItem = ({ item }) => (
    <View>
        <TouchableOpacity style={ styles.productItem }>
            <View>
                <Text style={ styles.title }>{item?.title}</Text>
                <Text style={ styles.description } numberOfLines={2} ellipsizeMode= 'tail'>{item?.description}</Text>
                <Text style={{ marginTop: 8, color: '#000' }}>{item?.price}</Text>
            </View>
            <Image
            style={ styles.productsImages }
            source={{ uri: item?.photo }}
            />
        </TouchableOpacity>
    </View>
);

export default function Order({ navigation }) {
    return (
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ backgroundColor: '#EEE' }}>
                    <View style={[ styles.headerBar, {paddingTop: 8} ]}>
                        <Image
                            style={styles.icon}
                            source={require('../img/Delivery.png')}/>
                        <View>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.txtShipping}>Giao đến</Text>
                                <Ionicons name="ios-chevron-down" size={15} color="grey" style={{ marginTop: 3, marginLeft: 2 }}/>
                            </View>
                            <Text>...</Text>
                        </View>
                    </View>
                    <View style={[ styles.headerBar, {paddingBottom: 16} ]}>
                        <TextInput style={styles.input} placeholder="Thực đơn"/>
                        <View style={styles.searchBar}>
                            <Ionicons name="ios-chevron-down" size={20} color="grey"/> 
                        </View>
                        <TouchableOpacity style={styles.ionIcons}>
                            <Ionicons name="ios-search-outline" size={20} color="grey"/> 
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.ionIcons}>
                            <Ionicons name="ios-heart-outline" size={20} color="grey"/> 
                        </TouchableOpacity>
                    </View>
                    <Text style={{ marginHorizontal: 16, marginVertical: 16, fontSize: 18, fontWeight: '500', color: '#000' }}>Đã đặt gần đây</Text>
                    <View style={styles.recently}>
                        <TouchableOpacity style={styles.booked}>
                            <Image style={ styles.productsImages } 
                                source={{ uri: 'https://minio.thecoffeehouse.com/image/admin/caphe-suada--bacsiu_063797_400x400.jpg' }}/>
                            <Text style={{ marginTop: 5 }}>Bạc xỉu {"\n"}đá</Text>
                            <Text style={{ marginTop: 5 }}>35.000đ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.booked}  onPress={() => navigation.navigate('Product')}>
                            <Image style={ styles.productsImages } 
                                   source={require('../img/matcha.jpg')}/>
                            <Text style={{ marginTop: 5 }}>Matcha đá {"\n"}xay</Text>
                            <Text style={{ marginTop: 5 }}>40.000đ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.booked}>
                            <Image style={ styles.productsImages } 
                                   source={{ uri: 'https://minio.thecoffeehouse.com/image/admin/cfdenda-espressoDa_647698_400x400.jpg'}}/>
                            <Text style={{ marginTop: 5 }}>Cà phê đen {"\n"}đá</Text>
                            <Text style={{ marginTop: 5 }}>32.000đ</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <View>
                        <Text style={{ marginHorizontal: 16, marginVertical: 16, fontSize: 18, fontWeight: '500', color: '#000' }}>Sản phẩm phổ biến</Text>
                        <FlatList
                            data={productsList}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            horizontal={false}/>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}