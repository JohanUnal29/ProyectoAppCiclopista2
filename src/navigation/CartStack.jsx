import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/subComponents/Header.jsx'
import Cart from "../components/Cart/Cart.jsx"

const Stack = createNativeStackNavigator()

export default function CartStack() {
    return (
        <Stack.Navigator
            initialRouteName='Cart'
            screenOptions={
                ({ route }) => {
                    return {
                        header: () => <Header title="Carrito" />
                    }
                }
            }
        >
            <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
    )
}