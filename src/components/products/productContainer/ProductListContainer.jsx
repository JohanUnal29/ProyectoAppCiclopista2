import { View, FlatList} from "react-native";
import React from "react";

import ProductList from "./ProductList.jsx";


const ProductListContainer = ({products, navigation, route}) => {
  return (
    <ProductList products={products} navigation={navigation} route={route} />
  );
};

export default ProductListContainer;

