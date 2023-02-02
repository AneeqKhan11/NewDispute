import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { 
    Login,
    Signup,
    ForgetPassword,
    NewPassword,
    ConfirmationScreen,
    SignupVerifed,
    TermsAndCondition,
    ResetPassword,
    AccountCreatedSuccesfully,
    } from '../../screens';


const AuthStuck = createStackNavigator()
const AuthStuckScreen = () => {
  return (
    <AuthStuck.Navigator initialRouteName='Login'>
        <AuthStuck.Screen name='Login' component={Login}/>
        <AuthStuck.Screen name='Signup' component={Signup}/>
        <AuthStuck.Screen name='ForgetPassword' component={ForgetPassword}/>
        <AuthStuck.Screen name='NewPassword' component={NewPassword}/>
        <AuthStuck.Screen name='ConfirmationScreen' component={ConfirmationScreen}/>
        <AuthStuck.Screen name='SignupVerifed' component={SignupVerifed}/>
        <AuthStuck.Screen name='TermsAndCondition' component={TermsAndCondition}/>
        <AuthStuck.Screen name='ResetPassword' component={ResetPassword}/>
        <AuthStuck.Screen name='AccountCreatedSuccesfully' component={AccountCreatedSuccesfully}/>
    </AuthStuck.Navigator>
  )
}

export default AuthStuckScreen

const styles = StyleSheet.create({})