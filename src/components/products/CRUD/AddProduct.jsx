import {View , TextInput , Button} from "react-native"
import React from "react";
import { StylesProduct } from "./StylesProduct";


export default function AddProduct({
  valueTitle,
  valuePrice,
  onChangeTitle,
  onChangePrice,
  addProduct,
}) {
  return (
    <View style={StylesProduct.inputContainer}>
      <TextInput
        style={StylesProduct.input}
        placeholder="Nombre"
        value={valueTitle}
        onChangeText={(t) => onChangeTitle(t)}
      />
      <TextInput
        style={StylesProduct.input}
        placeholder="Precio"
        value={valuePrice}
        onChangeText={(t) => onChangePrice(t)}
      />
      <Button title="ADD" onPress={addProduct} />
    </View>
  );
}

