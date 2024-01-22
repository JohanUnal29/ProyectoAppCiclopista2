import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {Header} from  '../components/subComponents/Header.jsx'
import MyProfile from '../components/profile/MyProfile.jsx'
import ImageSelector from '../components/profile/ImageSelector.jsx'

const Stack = createNativeStackNavigator()

const ProfileStack = () => {
  return (
    <Stack.Navigator
        initialRouteName='MyProfile'
        screenOptions={
            ({route})=>{
                return {
                    header : () => <Header title="Perfil"/>
                }
            }
        }
    >
        <Stack.Screen name="MyProfile" component={MyProfile} />
        <Stack.Screen name="ImageSelector" component={ImageSelector} />
    </Stack.Navigator>
  )
}

export default ProfileStack