import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './TabNavigator'
import { useState, useEffect } from 'react'
import AuthStack from './AuthStack'
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from '../features/auth/authSlice'
import { fechSession } from '../database/Index'

const MainNavigator = () => {
    const dispatch = useDispatch()
    const idToken = useSelector(state => state.auth.value.idToken)

    useEffect(() => {
        (async () => {
            try {
                const session = await fechSession()
                if (session.rows.length) {
                    const user = session.rows._array[0]
                    dispatch(setUser(user))
                }
            } catch (error) {
                console.log(error)
            }
        })()
    }, [])

    return (
        <NavigationContainer>
            {idToken ? <TabNavigator /> : <AuthStack />}
        </NavigationContainer>
    )
}

export default MainNavigator