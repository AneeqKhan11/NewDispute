import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AuthStuckScreen } from './src/navigation'
import { Home } from './src/screens'

const App = () => {
  return (
    <NavigationContainer>
      {/* <AuthStuckScreen/> */}
      <Home/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})