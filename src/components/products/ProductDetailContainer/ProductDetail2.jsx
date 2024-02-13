import { StyleSheet, Text, View, Image, Pressable, Button, TextInput, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors } from '../../../global/colors.jsx'

import { useGetProductQuery } from '../../../app/services/shopService.jsx'

import { addItem } from '../../../features/cart/cartSlice.jsx'

import { useDispatch } from 'react-redux'

const ProductDetail2 = ({ route }) => {

  const dispatch = useDispatch()
  const { id } = route.params
  const { data, isLoading } = useGetProductQuery(id)
  const [quantity, setQuantity] = useState(1)

  const increment = () => {
    setQuantity(quantity + 1)
  };

  const decrement = () => {
    setQuantity(quantity - 1)
  };


  return (
    <View>
      {(!isLoading) && (
        <View style={styles.content} >
          <Image
            style={styles.image}
            source={{ uri: data.images[2] }}
            resizeMode='cover' s
          />
          <View style={styles.containerText}>
            <Text style={styles.title}>{data.title}</Text>
            <Text>{data.description}</Text>
          </View>
          <View style={styles.container2}>
            <Button title='Incrementar' onPress={() => increment()} disabled={quantity === data.stock}/>
            <Text>{quantity}</Text>
            <Button title='Decrementar' onPress={() => decrement()} disabled={quantity < 2} />
            <View style={styles.inputContainer2}>
              <TextInput style={styles.input2} onChangeText={(t) => setQuantity(parseInt(t))} />
            </View>
          </View>
          <View style={styles.containerPrice}>
            <Text style={styles.price}>$ {data.price}</Text>
            <Pressable style={styles.buyNow} onPress={() => dispatch(addItem({data: data, quantity: quantity}))}>
              <Text style={styles.buyNowText}>Carrito</Text>
            </Pressable>
          </View>
        </View>
      )}
    </View>
  )
}

export default ProductDetail2

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "start",
    alignItems: "center",
  },
  content: {
    width: "100%"
  },

  image: {
    width: "100%",
    height: 300
  },
  goBack: {
    width: "100%",
    backgroundColor: colors.red,
    padding: 10,
    paddingStart: 40
  },
  containerText: {
    gap: 25,
    paddingHorizontal: 5,
    paddingVertical: 25
  },
  containerPrice: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 10
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  },
  price: {
    fontSize: 30
  },
  buyNow: {
    backgroundColor: colors.black,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5
  },
  buyNowText: {
    color: "white"
  },
  container2: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    margin: 15
  },
  inputContainer2: {
    gap: 10
  },
  input2: {
    borderWidth: 2
  }
})


