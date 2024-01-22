import { View, Text, Button, StyleSheet, useWindowDimensions, Image, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import { StylesProductContainer } from "./StylesProductContainer";
import { colors } from "../../../global/colors";
import { useDispatch } from 'react-redux'
import { setProductSelected } from "../../../features/shop/ShopSlice";

import { useGetProductQuery } from "../../../app/services/shopService";

const Product = ({ item, onModal, onModal2, setProductDetailId, navigation, route }) => {
  
  const { width } = useWindowDimensions()
  const dispatch = useDispatch()

  const images = Object.values(item.images)
  

  return (
    <Pressable style={styles.container} onPress={() => {
      dispatch(setProductSelected(item.id))
      navigation.navigate("Product", { id: item.id })
    }} >
      <Text style={width > 350 ? styles.text : styles.textMin}>{item.title}</Text>
      <Image
        style={styles.image}
        resizeMode='cover'
        source={{ uri: images[2] }}
      />
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.button} onPress={() => onModal(item)}>
          <Text style={styles.buttonText}>DELETE</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => onModal2(item)}>
          <Text style={styles.buttonText}>UPDATE</Text>
        </TouchableOpacity>
        <Text>{item.price} $</Text>
      </View>


    </Pressable>


  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    width: "85%",
    height: 120,
    backgroundColor: colors.green2,
    marginHorizontal: "10%",
    marginVertical: 10,
    paddingHorizontal: 0,
    paddingVertical: 15,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 30
  },
  text: {
    width: "60%",
    textAlign: "center",
    fontSize: 20
  },
  textMin: {
    width: "25%",
    textAlign: "center",
    fontSize: 15
  },
  image: {
    minWidth: 90,
    height: 100,
    width: "20%"
  },
  button: {
    width: "90%",
    height: "30%",
    borderRadius: 5,
    marginVertical: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.black,
  },
  buttonText: {
    color: "white",
    fontSize: 11,
  },
  containerButton: {
    width: "20%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: 100,
  }
})
