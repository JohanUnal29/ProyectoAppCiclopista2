import { StyleSheet } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { colors } from '../global/colors'

import ShopStack from './ShopStack.jsx'
import CartStack from './CartStack.jsx'
import OrdersStack from './OrderStack'
import TabIcon from '../global/TabIcon.jsx'
import ProfileStack2 from './ProfileStack2.jsx'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (

    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar

      }}
    >
      <Tab.Screen
        name="ShopStack"
        component={ShopStack}
        options={{
          tabBarIcon: ({ focused }) => <TabIcon icon="shop" label="Productos" focused={focused} />
        }}
      />
      <Tab.Screen
        name="CartStack"
        component={CartStack}
        options={{
          tabBarIcon: ({ focused }) => <TabIcon icon="shopping-cart" label="Carrito Ciclopista" focused={focused} />
        }}
      />
      <Tab.Screen
        name="OrdersStack"
        component={OrdersStack}
        options={{
          tabBarIcon: ({ focused }) => <TabIcon icon="list" label="Ordenes" focused={focused} />
        }}
      />
      <Tab.Screen
        name="ProfileStack2"
        component={ProfileStack2}
        options={{
          tabBarIcon: ({ focused }) => <TabIcon icon="user" label="Perfil" focused={focused} />
        }}
      />
    </Tab.Navigator>

  )
}

export default TabNavigator

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.red,
    elevation: 4,
    position: "absolute",
    bottom: 25,
    left: 20,
    right: 20,
    borderRadius: 15,
    height: 90


  }
})