import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { DisputeLogo, Input, Button, Checkboxs } from '../../component'
const Signup = () => {
  return (
    <View style={styles.SignUpScreen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.SignUpBox}>
          <DisputeLogo />
          <View style={styles.SignUpText}>
            <Text style={styles.SignUpText_A}>
              Sign Up
            </Text>
            <Text style={styles.SignUpText_B}>
              Enter details to create a new account.
            </Text>
          </View>
          <Input name_1st='person' type_1st="ionicon" placeholder="Full Name" />
          <Input name_1st='mail' type_1st="foundation" placeholder="Email" />
          <Input name_1st='calendar' type_1st="ionicon" placeholder="31-1-2023" />
          <Input name_1st='hospital-building' type_1st="material-community" placeholder="State" />
          <Input name_1st='location-pin' type_1st="entypo" placeholder="City" />
          <Input name_1st='person' type_1st="ionicon" placeholder="Gender" />
          <Input name_1st='lock' type_1st="entypo" name_2nd='eyeo' type_2nd="antdesign" placeholder="Password" />
          <Input name_1st='lock' type_1st="entypo" name_2nd='eyeo' type_2nd="antdesign" placeholder="Confirm Password" />
          <Input name_1st='mobile' type_1st="font-awesome-5" placeholder="Phone" />
          <View style={styles.SignUp_forgotPass_Div}>
            <Checkboxs title="I assure you that the mentioned information is correct" />
            <View style={styles.inlineDisplay}>
              <Checkboxs />
              <Text style={{paddingTop:10, paddingRight:5}}>
                Accept 
                <Text style={styles.TermsAndCondition}>'Terms & Conditions'</Text>
                 of using the Application
              </Text>
            </View>
          </View>

          <Button title="Sign Up" />

          <View style={styles.SignUp_CreateAccount_Div}>
            <Text style={styles.SignUp_CreateAccount_Text}> Already have an account?</Text><Text style={styles.SignUp_SignUp_Text}>/ Sign Up</Text>
          </View>
        </View>
      </ScrollView>

    </View>
  )
}

export default Signup

const styles = StyleSheet.create({
  inlineDisplay: {
    flexDirection: 'row'
  },

  SignUp_forgotPass_Div: {
    height: 140,
  },

  SignUp_SignUp_Text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#F4A236'
  },

  SignUp_CreateAccount_Text: {
    fontSize: 14,
  },

  SignUp_CreateAccount_Div: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingRight: 20,
    alignItems: "center"
  },

  SignUpBox: {
    flex: 1,
    paddingTop: 60,
    padding: 20
  },
  SignUpText_B: {
    fontSize: 15,
    color: "black",
    fontWeight: "bold"
  },
  SignUpText_A: {
    fontSize: 25,
    color: "black",
    fontWeight: "bold"
  },

  SignUpText: {
    height: 100,
    justifyContent: "center",
    alignItems: 'center'

  },

  TermsAndCondition: {
    color: 'skyblue'
  },



  SignupScreen: {
    flex: 1,
    justifyContent: "center",
    alignContent: 'center'
  },
})