import { FlatList, StyleSheet, View } from 'react-native'
import { useEffect, useState } from 'react'
import allOrders from "../../data/orders.json"
import Order from './Order'
import { useGetOdersQuery } from '../../app/services/shopService'
import { useSelector } from 'react-redux'

//modificar, traer ordenes base de datos

export default function OrderList() {
  const emailUser = useSelector(state => state.auth.value.email)
  console.log(emailUser)
  const { data, isLoading, error } = useGetOdersQuery(emailUser)
  const [orders, setOrders] = useState()

  console.log(error)

  useEffect(() => {
    if (!isLoading) {
      const dataArray = Object.values(data)
      setOrders(dataArray)
    }

  }, [data])

  return (
    <FlatList
      data={orders}
      keyExtractor={item => console.log(item)}
      renderItem={({ item }) => <Order order={item} />}
    />
  )
}