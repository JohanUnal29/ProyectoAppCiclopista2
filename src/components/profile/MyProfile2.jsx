import { StyleSheet, View, Image, Text } from 'react-native'
import React from 'react'

import AddButton from '../subComponents/AddButton'

import { useGetProfileImageQuery, useGetUserLocationQuery } from '../../app/services/shopService'

import { useSelector } from 'react-redux'

const MyProfile2 = ({ navigation }) => {
    const localId = useSelector(state => state.auth.value.localId)
    const { data } = useGetProfileImageQuery(localId)
    const { data: location } = useGetUserLocationQuery(localId)
    return (
        <View style={styles.container}>
            <Image
                source={data ? { uri: data.image } : require("../../../assets/user.png")}
                style={styles.image}
                resizeMode='cover'
            />
            <Text>{location?.address}</Text>
            <AddButton title={"Add profile picture"} onPress={() => navigation.navigate("ImageSelector2")} />
            <AddButton title={location ? "Cambiar Ubicacion" : "Agregar Ubicacion"} onPress={() => navigation.navigate("LocationSelector")} />
        </View>
    )
}

export default MyProfile2

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    image: {
        width: 200,
        height: 200
    }
})