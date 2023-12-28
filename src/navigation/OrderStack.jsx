import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/subComponents/Header.jsx'
import OrderListContainer from "../components/orders/OrderListContainer.jsx"

const Stack = createNativeStackNavigator()

const OrdersStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Orders'
            screenOptions={
                ({ route }) => {
                    return {
                        header: () => <Header title="Ordenes" />
                    }
                }
            }
        >
            <Stack.Screen name="Orders" component={OrderListContainer} />
        </Stack.Navigator>
    )
}

export default OrdersStack