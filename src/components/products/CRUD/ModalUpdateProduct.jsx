import { View, TextInput, Modal, Button } from "react-native";
import React from "react";
import { StylesProduct } from "./StylesProduct";

const ModalUpdateProduct = ({ title, price, visible, onChangeTitle, onChangePrice, onModalClose, onUpdate}) => {
  return (
    <Modal visible={visible}>
      <View style={StylesProduct.inputContainer}>
        <TextInput
          style={StylesProduct.input}
          placeholder="Nombre"
          value={title}
          onChangeText={(t) => onChangeTitle(t)}
        />
        <TextInput
          style={StylesProduct.input}
          placeholder="Precio"
          value={price}
          onChangeText={(t) => onChangePrice(t)}
        />
        <Button title="Confirmo" onPress={onUpdate} />
        <Button title="Cerrar" onPress={onModalClose} />
      </View>
    </Modal>
  );
};

export default ModalUpdateProduct;
