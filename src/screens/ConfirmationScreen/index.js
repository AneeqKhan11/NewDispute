import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Button, ConfirmInput, DisputeLogo, Input } from '../../component'
import Ionicons from 'react-native-vector-icons/Ionicons'


const ConfirmationScreen = () => {
    return (
        <View style={styles.ConfirmationScreen}>
            <View style={styles.TopBra}><TouchableOpacity style={styles.Button} ><Ionicons name='chevron-back' size={25} color='#F6A60E' /></TouchableOpacity></View>
            <View style={{flex:1}}>
            <ScrollView
            showsVerticalScrollIndicator={false}
            >
                <DisputeLogo />
                <View style={styles.LoginText}>
                    <Text style={styles.LoginText_A}>
                        Forget Password
                    </Text>
                    <Text style={styles.LoginText_B}>
                        Enter 4 digits code received on your email
                    </Text>
                </View>
                <View style={styles.email_text_div}>
                    <Text style={styles.email_text}>
                        StarksTony198@gmail.com
                    </Text>
                </View>
                <ConfirmInput />
                <View style={styles.ResendCode}>
                    <Text style={{fontSize:16}}>
                        Resend Code in <Text style={{fontWeight:'bold'}}>10 seconds</Text>
                    </Text>
                </View>
                <View style={styles.ResendCode}>
                    <Text style={{fontWeight:'bold', fontSize:18, color:'#F8C3A9'}}>Edit Email</Text>
                </View>
                <Button title='Confirm' Button={styles.Confirm_Button} />
            </ScrollView>
            </View>
        </View>
    )
}

export default ConfirmationScreen

const styles = StyleSheet.create({

    ResendCode:{
        height:20,
        marginTop:30,
        justifyContent:'center',
        alignItems:'center'
    },
    email_text_div: {
        height: 70,
        justifyContent: "center",
        alignItems: 'center',

    },
    email_text: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold'

    },
    Confirm_Button: {
        marginTop: 40,
        // marginBottom:20,
        color: 'white',
    },
    input: {
        marginTop: 40
    },
    LoginText_B: {
        fontSize: 15,
        marginTop: 10,
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
        alignItems: 'center',
    },
    text: {
        color: 'orange',

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
    ConfirmationScreen: {
        flex: 1,
        padding: 20,
        // backgroundColor:'black'
    }
})