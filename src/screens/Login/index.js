import { StyleSheet, Text, View, ScrollView, Linking } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { DisputeLogo, Input, Button } from '../../component'
const Login = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.LoginScreen}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.LoginBox}>
                    <DisputeLogo />
                    <View style={styles.LoginText}>
                        <Text style={styles.LoginText_A}>
                            Log In
                        </Text>
                        <Text style={styles.LoginText_B}>
                            Login into your account.
                        </Text>
                    </View>
                    <Input name_1st="mail" type="entypo"placeholder="Email" />
                    <Input name_1st="lock" type="entypo"placeholder="Password" />
                    <View style={styles.Login_forgotPass_Div}>
                        <Text style={styles.Login_forgotPass_Text} onPress={() => Linking.navigation('Signup')}> Forgot Password?</Text><Text style={styles.Login_Reset_Text}>/ Reset</Text>
                    </View>

                    <Button title="Sign In" />

                    <View style={styles.Login_CreateAccount_Div}>
                        <Text style={styles.Login_CreateAccount_Text}> Dont't have an account?</Text><Text style={styles.Login_SignUp_Text}>/ Sign Up</Text>
                    </View>
                </View>
            </ScrollView>

        </View>
    )
}

export default Login

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

    LoginBox: {
        flex: 1,
        paddingTop: 100
    },
    LoginScreen: {
        flex: 1,
        justifyContent: "center",
        alignContent: 'center',
        paddingHorizontal: 20
    },
})