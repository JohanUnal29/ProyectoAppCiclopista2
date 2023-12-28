import { View, FlatList} from "react-native";
import React from "react";

import ProductList from "./ProductList.jsx";

import { StylesProductContainer } from "./StylesProductContainer.jsx";

const ProductListContainer = ({products,onModal, onModal2, navigation, route}) => {
  return (
    <ProductList products={products} navigation={navigation} route={route} onModal={onModal} onModal2={onModal2}/>
  );
};

export default ProductListContainer;

