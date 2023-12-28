import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../global/colors'

const Header = ({ title = 'Producto', showBackButton = true }) => {

  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {title !== "Categorias" && (
        <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
          <Text>Volver</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.green1,
        width:"100%",
        height:80,
        justifyContent:"center",
        alignItems:"center"
    },
    backButton: {
      position: 'absolute',
      left: 10,
    },
    text: {
      fontSize: 20,
      fontFamily: 'Josefin',
    },
})