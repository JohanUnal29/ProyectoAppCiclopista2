import { View, Text, Modal, Button } from "react-native";
import React from "react";
import { StylesProduct } from "./StylesProduct";

const ModalDeleteProduct = ({product,visible,onModalClose,onDelete}) => {
  return (
    <Modal visible={visible}>
      <View style={StylesProduct.modalContainer}>
        <View style={StylesProduct.modalContent}>
          <Text style={StylesProduct.modalText}>¿esta seguro que quiere borrar?</Text>
          <Text style={StylesProduct.modalText}>{product.title}</Text>
          <Button title="Confirmo" onPress={onDelete} />
          <Button title="Cerrar" onPress={onModalClose} />
        </View>
      </View>
    </Modal>
  );
};

export default ModalDeleteProduct;
