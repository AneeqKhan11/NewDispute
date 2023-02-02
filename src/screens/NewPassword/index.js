import { StyleSheet, Text, View, ScrollView,TouchableOpacity } from 'react-native'
import { DisputeLogo, Button, Input } from '../../component'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
const NewPassword = () => {
    return (
        <View style={styles.NewPasswordScreen}>
            <View style={styles.TopBra}><TouchableOpacity style={styles.Button} ><Ionicons name='chevron-back' size={25} color='#F6A60E' /></TouchableOpacity></View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.NewPasswordBox}>
                    <DisputeLogo />
                    <View style={styles.NewPasswordText}>
                        <Text style={styles.NewPasswordText_A}>
                            New Password
                        </Text>
                        <Text style={styles.NewPasswordText_B}>
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
    NewPasswordText_B: {
        fontSize: 18,
        color: "black",
        fontWeight: "bold"
    },
    NewPasswordText_A: {
        fontSize: 25,
        color: "black",
        fontWeight: "bold"
    },
    NewPasswordText: {
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

    NewPasswordBox: {
        flex: 1,
    },
    NewPasswordScreen: {
        flex: 1,
        justifyContent: "center",
        alignContent: 'center',
        paddingHorizontal: 20
    },
})