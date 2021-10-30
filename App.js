import React from 'react'
import { Button, View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Home from './Scr/screens/home';
import Order from './Scr/screens/order';
import Restaurant from './Scr/screens/restaurant';
import Coupons from './Scr/screens/Coupons';
import Menu from './Scr/screens/menu';
import HomeLogin from './Scr/screens/homeLogin';
import Login from './Scr/screens/Login';
import Product from './Scr/screens/Product';

export default function App() {

  const HomeStack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  function HomeStackScreen() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="HomeLogin" component={HomeLogin} />
        <HomeStack.Screen name="Login" component={Login} />
        <HomeStack.Screen name="Home" component={Home} />
        <HomeStack.Screen name="Product" component={Product} />
      </HomeStack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        keyboardHidesTabBar: true,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Order') {
            iconName = focused ? 'cafe' : 'cafe-outline';
          } else if (route.name === 'Store') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'Voucher') {
            iconName = focused ? 'gift' : 'gift-outline';
          } else if (route.name === 'Menu') {
            iconName = focused ? 'reorder' : 'reorder-four-outline';
          }
          
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
      >
        <Tab.Screen name="Trang chủ" component={HomeStackScreen} />
        <Tab.Screen name="Đặt hàng" component={Order} />
        <Tab.Screen name="Cửa hàng" component={Restaurant} />
        <Tab.Screen name="Ưu đãi" component={Coupons} />
        <Tab.Screen name="Khác" component={Menu} />

      </Tab.Navigator>
    </NavigationContainer>
  )
}

