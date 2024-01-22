import { useEffect, useState } from 'react'

import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import Header from '../subComponents/Header.jsx'
import Search from "../subComponents/Search.jsx"

import ProductListContainer from '../products/productContainer/ProductListContainer.jsx'

//modals
import ModalDeleteProduct from '../products/CRUD/ModalDeleteProduct.jsx'
import ModalUpdateProduct from '../products/CRUD/ModalUpdateProduct.jsx'
import AddProduct from '../products/CRUD/AddProduct.jsx'

import uuid from "react-native-uuid";
import Counter from '../counter/Counter.jsx'

import { useGetProductsQuery } from '../../app/services/shopService.jsx'


const CategoryListContainer = ({ navigation, route }) => {

  //DB//
  const { category } = route.params
  const { data, isLoading, error } = useGetProductsQuery(category)
  const [keyword, setKeyword] = useState("")
  const [products, setProducts] = useState()

  useEffect(() => {
    if (!isLoading) {
      const dataArray = Object.values(data)
      const productsFiltered = dataArray.filter(product => product.title.includes(keyword))
      setProducts(productsFiltered)
    }

  }, [keyword, data])



  //modals
  const [newTitleProduct, setNewTitleProduct] = useState("");
  const [newPriceProduct, setNewPriceProducts] = useState("");
  const [productSelected, setProductSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);

  const [updatedTitleProduct, setUpdatedTitleProduct] = useState("");
  const [updatedPriceProduct, setUpdatedPriceProducts] = useState("");

  const handlerAddProduct = () => {
    const newProduct = {
      id: uuid.v4(),
      title: newTitleProduct,
      price: newPriceProduct,
    };

    setProducts((current) => [...current, newProduct]);
    setNewTitleProduct("");
    setNewPriceProducts("");
  };

  const handlerModal = (item) => {
    setProductSelected(item);
    setModalVisible(true);
  };

  const handlerModal2 = (item) => {
    setProductSelected(item);
    setUpdatedTitleProduct(item.title);
    setUpdatedPriceProducts(item.price);
    setModalVisible2(true);
  };

  const handlerDeleteProduct = () => {
    setProducts((current) =>
      current.filter((product) => product.id !== productSelected.id)
    );
    setModalVisible(false);
  };

  const handleUpdateProduct = () => {
    setProducts((actuales) =>
      actuales.map((producto) =>
        producto.id === productSelected.id
          ? {
            ...producto,
            title: updatedTitleProduct || producto.title,
            price: updatedPriceProduct || producto.price,
          }
          : producto
      )
    );

    // Reiniciar el formulario y cerrar el modal
    setUpdatedTitleProduct("");
    setUpdatedPriceProducts("");
    setModalVisible2(false);
  };


  const handleCloseModalDelete = () => {
    setModalVisible(false)
  }

  const handleCloseModalUpdate = () => {
    setModalVisible2(false)
  }

  return (
    <>
      <Search setKeyword={setKeyword} />
      <AddProduct
        valueTitle={newTitleProduct}
        valuePrice={newPriceProduct}
        onChangeTitle={setNewTitleProduct}
        onChangePrice={setNewPriceProducts}
        addProduct={handlerAddProduct}
      />
      <Counter />
      <ProductListContainer products={products} navigation={navigation} route={route} onModal={handlerModal} onModal2={handlerModal2} />

      <ModalDeleteProduct
        product={productSelected}
        visible={modalVisible}
        onModalClose={handleCloseModalDelete}
        onDelete={handlerDeleteProduct}
      />
      <ModalUpdateProduct
        title={updatedTitleProduct}
        price={updatedPriceProduct}
        visible={modalVisible2}
        onModalClose={handleCloseModalUpdate}
        onUpdate={handleUpdateProduct}
        onChangeTitle={setUpdatedTitleProduct}
        onChangePrice={setUpdatedPriceProducts}
      />
    </>
  )
}

export default CategoryListContainer

const styles = StyleSheet.create({
  container: {
    width: "100%"
  }
})