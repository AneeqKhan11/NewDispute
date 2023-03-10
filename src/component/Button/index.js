import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = (props) => {
    const { Button, title, onPress, Text_Style } = props
    return (
        <TouchableOpacity style={[styles.Button, Button]}>

            <Text
                style={[styles.Button_text, Text_Style]}
                onPress={onPress}
            >{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    Button_text: {
        color: "white",
        fontSize: 15,
        fontWeight: 'bold'
    },
    Button: {
        height: 50,
        marginBottom:20,
        borderRadius: 15,
        backgroundColor: "#F05223",
        justifyContent: "center",
        alignItems: "center",
        color: 'white',
        shadowColor: "skyblue",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.21,
        shadowRadius: 100,

        elevation: 5,
    },
})