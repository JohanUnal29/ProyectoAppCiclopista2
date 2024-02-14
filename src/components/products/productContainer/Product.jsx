import { View, Text, Button, StyleSheet, useWindowDimensions, Image, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import { StylesProductContainer } from "./StylesProductContainer";
import { colors } from "../../../global/colors";
import { useDispatch } from 'react-redux'


const Product = ({ item, navigation}) => {
  
  const { width } = useWindowDimensions()
  const dispatch = useDispatch()

  const images = Object.values(item.images)
  

  return (
    <Pressable style={styles.container} onPress={() => {
      navigation.navigate("Product", { id: item.id })
    }} >
      <Text style={width > 350 ? styles.text : styles.textMin}>{item.title}</Text>
      <Image
        style={styles.image}
        resizeMode='cover'
        source={{ uri: images[2] }}
      />


    </Pressable>


  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    width: "80%",
    height: 120,
    backgroundColor: colors.blueGradient,
    marginHorizontal: "10%",
    marginVertical: 10,
    paddingHorizontal: 10,
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
    
    height: 90,
    width: 80,
  },
  
  
})
