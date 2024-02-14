import { StyleSheet, Text, View, Pressable } from 'react-native'
import { colors } from '../../global/colors'

import { MaterialIcons } from '@expo/vector-icons'
import { deleteAllSession } from '../../database/Index';
import { useSelector, useDispatch } from 'react-redux'
import { clearUser } from '../../features/auth/authSlice'

const Header = ({ title = 'Producto', showBackButton = true }) => {

  const dispatch = useDispatch()
  const localId = useSelector(state => state.auth.value.localId)
  const onLogout = () => {
    deleteAllSession().then(result => console.log(result))
    dispatch(clearUser())
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      {localId && <Pressable onPress={onLogout} style={styles.logoutIcon}>
        <MaterialIcons name='logout' size={30} color="white" />
      </Pressable>
      }
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 20,
    fontFamily: "Josefin",
    color: "white"
  },
  logoutIcon: {
    position: "absolute",
    right: 10,
  }
})