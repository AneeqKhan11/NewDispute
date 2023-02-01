import { StyleSheet, Text, View, Image  } from 'react-native'
import React from 'react'
import { Logo } from '../../assets'
const DisputeLogo = () => {
    return (
        <View style={styles.LoginLogo}>
                <Image source={Logo} resizeMode="center"/>
        </View>
    )
}

export default DisputeLogo

const styles = StyleSheet.create({
    LoginLogoStyle: {
        color: "white",
        fontSize: 60,
        fontWeight: 'bold',
        color: '#F4A236',
    },
    LoginLogo: {
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',

    },
})