import { useEffect, useState } from 'react'

import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import Header from '../subComponents/Header.jsx'
import Search from "../subComponents/Search.jsx"

import ProductListContainer from '../products/productContainer/ProductListContainer.jsx'

import uuid from "react-native-uuid";

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


  return (
    <>
      <Search setKeyword={setKeyword} />
      
      <ProductListContainer products={products} navigation={navigation} route={route} />

    </>
  )
}

export default CategoryListContainer

const styles = StyleSheet.create({
  container: {
    width: "100%"
  }
})