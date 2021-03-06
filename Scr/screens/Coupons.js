import React from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from '../styles/CouponStyle'
import UserCard from '../components/userCard'
import VoucherList from '../components/voucherList'

export default function Coupons() {
    return (
        <SafeAreaView>
            <ScrollView
            showsVerticalScrollIndicator={false}>
                <View style={{backgroundColor: '#EEE'}}>

                    <View style={styles.codeView}>
                        <UserCard/>
                    </View>

                    <View style={styles.btnList}>
                        <TouchableOpacity style={styles.btnItem}>
                            <Ionicons name="gift-outline" size={16} color="#FF3300" />
                            <Text style={styles.btnInfo}>Đổi ưu đãi</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btnItem}>
                            <Ionicons name="wallet-outline" size={16} color="#FF3300" />
                            <Text style={styles.btnInfo}>Voucher của bạn</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btnItem}>
                            <Ionicons name="time-outline" size={16} color="#FF3300" />
                            <Text style={styles.btnInfo}>Lịch sử BEAN</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btnItem}>
                            <Ionicons name="shield-checkmark-outline" size={16} color="#3366CC" />
                            <Text style={styles.btnInfo}>Quyền lợi của bạn</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{marginHorizontal: 16, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={styles.titleContent}>Phiếu ưu đãi của bạn</Text>
                        <TouchableOpacity>
                            <Text  style={styles.btnMore}>Xem tất cả</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <VoucherList/>
                    </View>

                    <View style={{marginHorizontal: 16, marginVertical: 16, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={styles.titleContent}>Đổi ưu đãi</Text>
                        <TouchableOpacity>
                            <Text  style={styles.btnMore}>Xem tất cả</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

