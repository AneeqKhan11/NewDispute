import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ForgetPassword, Login , NewPassword, Signup} from './src/screens'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
    <NavigationContainer>
      {/* <Login /> */}
      {/* <Signup/> */}
      {/* <ForgetPassword/> */}
      <NewPassword/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})