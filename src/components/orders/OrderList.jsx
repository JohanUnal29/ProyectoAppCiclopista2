import { FlatList, StyleSheet, View } from 'react-native'
import { useEffect, useState } from 'react'
import allOrders from "../../data/orders.json"
import Order from './Order'
import { useGetOdersQuery } from '../../app/services/shopService'
import { useSelector } from 'react-redux'

//modificar, traer ordenes base de datos

export default function OrderList() {
  const emailUser = useSelector(state => state.auth.value.email)
  const { data, isLoading, error, refetch } = useGetOdersQuery(emailUser)
  const [orders, setOrders] = useState()

  console.log(emailUser)

  useEffect(() => {
    if (!isLoading) {
      const dataArray = Object.values(data)
      setOrders(dataArray)
    }

  }, [data, isLoading])

  useEffect(() => {
    const interval = setInterval(() => {
      // Refetch data from the server
      refetch();
    }, 5000); // Refresh every 5 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  return (
    <FlatList
      data={orders}
      keyExtractor={item => console.log(item)}
      renderItem={({ item }) => <Order order={item} />}
    />
  )
}