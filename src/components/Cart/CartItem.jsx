import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Entypo } from "@expo/vector-icons"
import { colors } from '../../global/colors'

import { removeItem } from '../../features/cart/cartSlice'

import { useDispatch } from 'react-redux'

export default function CartItem({item}) {

    const dispatch = useDispatch()
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text1}>{item.title}</Text>
                <Text style={styles.text2}>{item.brand}</Text>
                <Text  style={styles.text2}>Cantidad: {item.quantity} Precio $ {item.price*item.quantity}</Text>
            </View>
            <Entypo name='trash' size={25} color="black" onPress={() => dispatch(removeItem(item.id))}/>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.green2,
        margin: 10,
        padding: 10,
        height: 100,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 10,
        borderWidth: 2
    },
    textContainer: {
        width: "70",
        gap: 5
    },
    text1: {
        fontSize: 19,
        color: colors.black,
        fontFamily: "Josefin"
    },
    text2: {
        fontSize: 17,
        color: colors.black,
        fontFamily: "Josefin"
    }

})