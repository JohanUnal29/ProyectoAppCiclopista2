import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Header } from '../components/subComponents/Header.jsx'

import { View, Text } from 'react-native'
import React from 'react'
import Cart from '../components/Cart/Cart'
import ImageSelector2 from '../components/profile/ImageSelector2.jsx'
import MyProfile2 from '../components/profile/MyProfile2.jsx'
import LocationSelector from '../components/profile/location/LocationSelector.jsx'

const Stack = createNativeStackNavigator()

const ProfileStack2 = () => {
    return (
        <Stack.Navigator
            initialRouteName='MyProfile2'
            screenOptions={
                ({ route }) => {
                    return {
                        header: () => <Text>xd</Text>
                    }
                }
            }
        >

            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="ImageSelector2" component={ImageSelector2} />
            <Stack.Screen name="MyProfile2" component={MyProfile2} />
            <Stack.Screen name="LocationSelector" component={LocationSelector} />
        </Stack.Navigator>
    )
}

export default ProfileStack2