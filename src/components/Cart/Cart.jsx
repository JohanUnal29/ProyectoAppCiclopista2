import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import allCart from "../../data/cart.json"
import { useEffect, useState } from 'react'
import CartItem from "./CartItem.jsx"
import Counter from '../counter/Counter.jsx'

export default function Cart() {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(() => {

    setCart(allCart)

  }, [])

  useEffect(() => {

    const total = cart.reduce((acc, product) => acc + (product.price * product.quantity), 0)
    setTotal(total)

  }, [cart])

  return (
    <View style={styles.container}>
      <Counter/>
      <FlatList
        data={cart}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <CartItem item={item} />}
      />
      <View style={styles.confirmContainer}>
        <Pressable>
          <Text style={styles.text}>Confirmar</Text>
        </Pressable>
        <Text style={styles.text}>Total: $ {total} </Text>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      marginBottom:130
  },
  confirmContainer:{
      backgroundColor:"grey",
      padding:25,
      flexDirection:"row",
      justifyContent:"space-between",
  },
  text:{
      color:"white",
      fontFamily:"PlayFair"
  }
})