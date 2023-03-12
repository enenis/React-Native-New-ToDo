import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/pages/auth/Login';
import Sign from './src/pages/auth/Sign';
import FlashMessage from "react-native-flash-message";
import Todo from './src/pages/Todo';
import auth from "@react-native-firebase/auth"
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const Stack= createNativeStackNavigator()

export default ()=>{
  const[userSession,setUserSession]=React.useState()

  React.useEffect(()=>{
    auth().onAuthStateChanged(user=>{
        setUserSession(!user)
    })
  },[])

  const AuthStack=()=>{
    return(
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='LoginPage' component={Login} />
        <Stack.Screen name='SignPage' component={Sign} />
      </Stack.Navigator>
    )
  }

  return(
      <NavigationContainer>

    {
      userSession? <AuthStack />:<Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name='TodoPage' component={Todo} />
    </Stack.Navigator>
    }
      
      <FlashMessage position="top" />
    </NavigationContainer>
  )
}