import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Button, DisputeLogo, Input } from '../../component'
import Ionicons from 'react-native-vector-icons/Ionicons'

const ForgetPassword = () => {
  return (
    <View style={styles.ForgetPasswordScreen}>
      <View style={styles.TopBra}><TouchableOpacity style={styles.Button} ><Ionicons name='chevron-back' size={25} color='#F6A60E'/></TouchableOpacity></View>
      <ScrollView>
        <DisputeLogo />
        <View style={styles.LoginText}>
          <Text style={styles.LoginText_A}>
            Forget Password
          </Text>
          <Text style={styles.LoginText_B}>
            Enter your email to recover password
          </Text>
        </View>
        <Input name_1st='mail' type_1st='foundation' placeholder="Email" Inputs_Div={styles.input}/>
        <Button title='Confirm' Button={styles.Confirm_Button}/>
      </ScrollView>
    </View>
  )
}

export default ForgetPassword

const styles = StyleSheet.create({

  Confirm_Button:{
    marginTop:40,
    color:'white'
  },
  input:{
    marginTop:60
  },
  LoginText_B: {
    fontSize: 15,
    marginTop:10,
    color: "black",
    fontWeight: "bold"
  },
  LoginText_A: {
    fontSize: 25,
    color: "black",
    fontWeight: "bold"
  },
  LoginText: {
    height: 100,
    justifyContent: "center",
    alignItems: 'center'
  },
  text:{
    color:'orange',

  },

  Button: {
    height: 35,
    width: 35,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#FBEBD7',
    justifyContent:'center',
    alignItems:'center'

  },
  TopBra: {
    height: 75,
    justifyContent: 'center',
  },
  ForgetPasswordScreen: {
    flex: 1,
    padding:20
  }
})