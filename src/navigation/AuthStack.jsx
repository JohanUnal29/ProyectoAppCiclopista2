import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/subComponents/Header.jsx'
import Signup from '../components/auth/Signup.jsx'
import Login from '../components/auth/Login'

const Stack = createNativeStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator
        initialRouteName='Signup'
        screenOptions={
            ({route})=>{
                return {
                    header : () => <Header title="Bienvenido"/>
                }
            }
        }
    >
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  )
}

export default AuthStack