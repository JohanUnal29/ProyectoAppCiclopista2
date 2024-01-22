import { FlatList, StyleSheet} from 'react-native'
import Category from './Category'

import { useGetCategoriesQuery } from '../../app/services/shopService'

const CategoryList = ({navigation,route}) => {

    const {data:categories} = useGetCategoriesQuery()
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