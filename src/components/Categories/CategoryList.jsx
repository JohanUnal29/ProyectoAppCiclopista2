import { FlatList, StyleSheet} from 'react-native'
import Category from './Category'
import { useSelector,} from 'react-redux'

const CategoryList = ({navigation,route}) => {

    const categories = useSelector((state) => state.shop.value.categories)
    return (
      <FlatList
          style={styles.container}
          data={categories}
          keyExtractor={item => item}
          renderItem={({item}) => <Category navigation={navigation} route={route} category={item} />}
      />
    )
  }
  
  export default CategoryList
  
  const styles = StyleSheet.create({
      container:{
          width:"100%",
          
      }
  })