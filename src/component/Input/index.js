import { StyleSheet, View, TextInput } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed';
const Input = (props) => {
    const { Inputs_Div, placeholder, keyboardType, Input_icon, name_1st, type_1st, name_2nd, type_2nd, input } = props
    return (

        <View style={[styles.Inputs_Div, Inputs_Div]}>
            <View style={[styles.Input_icon, Input_icon]}>
                <Icon name={name_1st} type={type_1st} />
            </View>
            <TextInput
                placeholder={placeholder}
                keyboardType={keyboardType}
                style={[styles.input , input]}
            />
            <View style={[styles.Input_icon, Input_icon]}>
                <Icon name={name_2nd} type={type_2nd} />
            </View>
        </View>
    )
}

export default Input

const styles = StyleSheet.create({



    Input_icon: {
        flex: 1,
    },
    input: {
        flex: 5,
        fontSize: 14,

    },
    Inputs_Div: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 12,
        backgroundColor: '#EEECED',
        height: 50,
        paddingHorizontal: 10,
        marginBottom: 10,
        alignItems:'center'
    },
})