import { Pressable, StyleSheet, Text, View } from 'react-native'
import { colors } from "../../global/colors"
import CardShadow from "../subComponents/wrappers/CardShadow.jsx"

import { setProductsFilteredByCategory } from '../../features/shop/ShopSlice.jsx'

import { useDispatch } from 'react-redux'

const Category = ({ category, navigation, route }) => {

    const dispatch = useDispatch()

    return (
        <Pressable onPress={() => {
            dispatch(setProductsFilteredByCategory(category))
            navigation.navigate("Category", { category })
        }}>
            <CardShadow style={styles.container}>
                <Text style={styles.text}>{category}</Text>
            </CardShadow>
        </Pressable>
    )
}

export default Category

const styles = StyleSheet.create({
    container: {
        width: "80%",
        marginHorizontal: "10%",
        backgroundColor: colors.green2,
        margin: 10,
        padding: 10,
        justifyContent: "center",
        alignItems: "center"
    }
})