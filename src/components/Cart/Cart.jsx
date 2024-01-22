import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import { useEffect, useState } from 'react'
import CartItem from "./CartItem.jsx"

import { useSelector } from 'react-redux'

import { usePostOrdersMutation } from '../../app/services/shopService.jsx'

export default function Cart() {
  const cart = useSelector(state => state.cart.value)
  const [triggerPostOrder] = usePostOrdersMutation()
  return (
    <View style={styles.container}>
      <FlatList
        data={cart.items}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <CartItem item={item} />}
      />
      <View style={styles.confirmContainer}>
        <Pressable onPress={() => triggerPostOrder(cart)}>
          <Text style={styles.text}>Confirmar</Text>
        </Pressable>
        <Text style={styles.text}>Total: $ {cart.total} </Text>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 130
  },
  confirmContainer: {
    backgroundColor: "grey",
    padding: 25,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: "white",
    fontFamily: "PlayFair"
  }
})