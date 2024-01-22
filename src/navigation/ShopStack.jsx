import React, { Component } from 'react'
import { Text, TouchableOpacity } from 'react-native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../components/Home/Home.jsx'
import CategoryListContainer from '../components/Categories/CategoryListContainer.jsx'
import Header from '../components/subComponents/Header.jsx'
import ProductDetail2 from '../components/products/ProductDetailContainer/ProductDetail2.jsx'

const Stack = createNativeStackNavigator()

const ShopStack = () => {
    const goBack = (navigation) => {
        navigation.goBack();
    };

    return (
            
            <Stack.Navigator
                initialRouteName='Home'
                screenOptions={({ route, navigation }) => ({
                    header: () => (
                        <Header
                            title={
                                route.name === 'Home'
                                    ? 'Categorias'
                                    : route.name === 'Category'
                                        ? route.params.category
                                        : 'Detalle'
                            }
                        />
                    ),
                })}
            >
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Category' component={CategoryListContainer} />
                <Stack.Screen name='Product' component={ProductDetail2} />
            </Stack.Navigator>
    );
};

export default ShopStack
