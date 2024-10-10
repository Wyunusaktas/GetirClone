import { StyleSheet, Image, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import CategoryFilterScreen from '../screens/CategoryFilterScreen'
const Stack = createStackNavigator()

const HomeNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerStyle: { backgroundColor: "#5c3ebc" },
                    headerTitleAlign: 'center',
                    headerTitle: () => (
                        <Image
                            source={require("../../assets/getirlogo.png")}
                            style={{ width: 70, height: 30 }}
                        />
                    )
                }}
            />
            <Stack.Screen
                name="CategoryDetails"
                component={CategoryFilterScreen}
                options={{
                    headerStyle: { backgroundColor: "#5c3ebc" },
                    headerTitleAlign: 'center',
                    headerBackTitleVisible: false,
                    headerTintColor: 'white',
                    headerTitle: () => (
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>Ürünler</Text>
                    )
                }}
            />
        </Stack.Navigator>
    )
}

export default HomeNavigator

const styles = StyleSheet.create({})