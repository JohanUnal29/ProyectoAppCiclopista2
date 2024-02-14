import { StyleSheet } from 'react-native'
import Header from '../subComponents/Header';

import CategoryList from "../Categories/CategoryList.jsx"; 
import Counter from '../counter/Counter.jsx';

const Home = ({navigation,route}) => {
  
    return (
          <>
              <CategoryList navigation={navigation} route={route}/>
          </>
    )
  }
  
  export default Home