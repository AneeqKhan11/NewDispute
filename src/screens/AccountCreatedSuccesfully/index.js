import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { Button, DisputeLogo } from '../../component'
import AnimatedLottieView from 'lottie-react-native'

const AccountCreatedSuccesfully = () => {
    return (
        <View style={styles.AccountCreatedSuccesfullyScreen}>
            <ScrollView>
                <DisputeLogo />
                <View style={styles.GifImage_Div}>
                    <AnimatedLottieView style={{ height: 200, alignSelf: "center" }} source={require('../../assets/Gif/Checklist 2.json')} autoPlay />
                </View>
                <View style={styles.LoginText}>
                    <Text style={styles.LoginText_B}>
                        Account created  Successfully
                    </Text>
                </View>
                <Button title='Sign In' Button={styles.Confirm_Button} />
            </ScrollView>
        </View>
    )
}

export default AccountCreatedSuccesfully

const styles = StyleSheet.create({
    GifImage_Div: {
        flex: 1,
        height: 200,
    },
    Confirm_Button: {
        marginTop: 40,
        color: 'white'
    },
    LoginText_B: {
        fontSize: 18,
        marginTop: 10,
        color: "#818181",
        fontWeight: "bold",
        textAlign: 'center'
    },
    LoginText: {
        // height: 100,
        justifyContent: "center",
        alignItems: 'center',
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
    AccountCreatedSuccesfullyScreen: {
        flex: 1,
        paddingTop: 100,
        paddingHorizontal: 20
    }
})