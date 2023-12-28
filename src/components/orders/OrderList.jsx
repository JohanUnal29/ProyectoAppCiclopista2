import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import allOrders from "../../data/orders.json"
import Order from './Order'

export default function OrderList() {
    return (
        <FlatList
            data={allOrders}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <Order order={item} />}
        />
    )
}