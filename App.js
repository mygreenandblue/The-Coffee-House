import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Button } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeLogin from './Scr/screens/homeLogin';
import Order from './Scr/screens/order'
import Res from './Scr/screens/restaurant'
// import Vch from './screens/component/voucher'
import Login from './Scr/screens/Login'
import Home from './Scr/screens/home'
import Vch from './Scr/screens/voucher'
import Menu from './Scr/screens/menu'
export default function App() {

  const HomeStack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();


  function HomeStackScreen() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={HomeLogin} />
        <HomeStack.Screen name="Login" component={Login} />
        <HomeStack.Screen name="HomeA" component={Home} />
       
      </HomeStack.Navigator>
    );
  }


  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Trang chủ') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Đặt hàng') {
              iconName = focused ? 'order' : 'cafe-outline';
            } else if (route.name === 'Cửa hàng') {
              iconName = focused ? 'store' : 'search-outline';
            } else if (route.name === 'Ưu đãi') {
              iconName = focused ? 'gift' : 'gift-outline';
            } else if (route.name === 'Khác') {
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
        <Tab.Screen name="Cửa hàng" component={Res} />
        <Tab.Screen name="Ưu đãi" component={Vch} />
        <Tab.Screen name="Khác" component={Menu} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}