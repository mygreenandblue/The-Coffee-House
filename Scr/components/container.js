import React from 'react'
import { Dimensions, Image, View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import { useState } from 'react'

const ContainerList = [
    'https://feed.thecoffeehouse.com//content/images/2021/10/APP-NEWS-TUNGTANG.jpg',
    'https://feed.thecoffeehouse.com//content/images/2021/10/BANNER-APP.jpg',
    'https://minio.thecoffeehouse.com/image/admin/bannerhomeWEB-Caphetainha_409405.jpg',
    'https://feed.thecoffeehouse.com//content/images/2021/10/APP-NEWS-khoi-dau.jpg',
    'https://minio.thecoffeehouse.com/image/admin/banner-web-KETNOI-1200X480(1)_280533.jpg',
]

const WIDTH = Dimensions.get('window').width;

export default function Container() {

    const [imgActive, setimgActive] = useState(0)

    const onchange = (nativeEvent) => {
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            if (slide != imgActive) {
                setimgActive(slide);
            }
        }
    }

    const renderItem = ({ item }) => (
        <View>
            <Image style={styles.wrap} source={{uri: item?.photo}}/>
        </View>
    )

    return (
        <SafeAreaView style={styles.container}>
            <View style={[styles.wrap]} >
                <ScrollView onScroll={({nativeEvent}) => onchange(nativeEvent)}
                            showsHorizontalScrollIndicator={false} pagingEnabled
                            horizontal style={styles.wrap}>
                    {
                        ContainerList.map((e, index) => 
                        <Image key={e} resizeMode='stretch' style={styles.wrap} source={{uri :e}}/>)
                    }
                </ScrollView>

                <View style={styles.wrapDot}>
                {
                    ContainerList.map((a, index) =>
                        <Text key={a} style={imgActive == index ? styles.stActive : styles.st}>_</Text>)
                }
                    
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 16,
        alignSelf: 'center',
        borderRadius: 8,
        shadowColor: "#000",
        shadowOpacity: 0.4,
        elevation: 12,
    },
    wrap: {
        width: WIDTH*0.9,
        height: WIDTH*0.5,
        borderRadius: 8,
    },
    wrapDot: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignSelf: 'center'
    },
    stActive: {
        margin: 3,
        color: '#FF7900',
    },
    st: {
        margin: 3,
        color: '#FFF',
    }
})