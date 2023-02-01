import { StyleSheet, Text, View, ScrollView,TouchableOpacity } from 'react-native'
import { DisputeLogo, Button, Input } from '../../component'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
const NewPassword = () => {
    return (
        <View style={styles.LoginScreen}>
            <View style={styles.TopBra}><TouchableOpacity style={styles.Button} ><Ionicons name='chevron-back' size={25} color='#F6A60E' /></TouchableOpacity></View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.LoginBox}>
                    <DisputeLogo />
                    <View style={styles.LoginText}>
                        <Text style={styles.LoginText_A}>
                            New Password
                        </Text>
                        <Text style={styles.LoginText_B}>
                            Enter your new password
                        </Text>
                    </View>
                    <Input Inputs_Div={{marginTop:50}} name_1st='lock' type_1st="entypo" name_2nd='eyeo' type_2nd="antdesign" placeholder="New Password" />
                    <Input Inputs_Div={{marginTop:15}} name_1st='lock' type_1st="entypo" name_2nd='eyeo' type_2nd="antdesign" placeholder="Confirm Password" />
                    <Button title="Confirm" Button={{marginTop:60}}/>
                </View>
            </ScrollView>

        </View>
    )
}

export default NewPassword

const styles = StyleSheet.create({


    
    Login_SignUp_Text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#F4A236'
    },
    Login_CreateAccount_Text: {
        fontSize: 14,
    },
    Login_CreateAccount_Div: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingRight: 20,
        alignItems: "center"
    },
    Login_Reset_Text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#F4A236'
    },
    Login_forgotPass_Text: {
        fontSize: 14,
    },
    Login_forgotPass_Div: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'flex-end',

    },
    LoginText_B: {
        fontSize: 18,
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
    Button: {
        height: 35,
        width: 35,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: '#FBEBD7',
        justifyContent: 'center',
        alignItems: 'center'

    },
    TopBra: {
        height: 75,
        justifyContent: 'center',
    },

    LoginBox: {
        flex: 1,
    },
    LoginScreen: {
        flex: 1,
        justifyContent: "center",
        alignContent: 'center',
        paddingHorizontal: 20
    },
})