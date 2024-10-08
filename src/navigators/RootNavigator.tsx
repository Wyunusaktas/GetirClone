import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Entypo from '@expo/vector-icons/Entypo';
import HomeNavigator from './HomeNavigator';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
const Tab = createBottomTabNavigator()

const CustomTabBarButton = ({ children }: { children: any }) => {
    return (
        <TouchableOpacity style={{ width: 70, height: 70, backgroundColor: '#5C3EBC', justifyContent: 'center', alignItems: 'center', marginTop: -10, borderRadius: 60 }}>
            <Entypo name="list" size={32} color="#FFD00C" />
        </TouchableOpacity>
    )
}

const RootNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName='Ana Sayfa'
            screenOptions={{
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarActiveTintColor: "#5C3EBC",
                tabBarInactiveTintColor: "#959595",
                headerShown: false,
                tabBarStyle: {
                    height: 80,
                },
            }}

        >
            <Tab.Screen
                name='Ana Sayfa'
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name="home" size={24} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name='Search'
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="search1" size={24} color="black" />
                    )
                }}
            />
            <Tab.Screen
                name='list'
                component={HomeNavigator}
                options={{
                    tabBarButton: (props) => <CustomTabBarButton{...props} />
                }}
            />
            <Tab.Screen
                name='Personal'
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="person-outline" size={24} color="black" />
                    )
                }}
            />
            <Tab.Screen
                name='Gift'
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Feather name="gift" size={24} color="black" />
                    )
                }}
            />


        </Tab.Navigator>
    )
}

export default RootNavigator

const styles = StyleSheet.create({})
