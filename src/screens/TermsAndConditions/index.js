import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
const TermsAndCondition = () => {
    return (
        <View style={styles.TermsAndCondition}>
            <View style={styles.TopBra}>
                <TouchableOpacity style={styles.Button} >
                    <Ionicons name='chevron-back' size={25} color='#F6A60E' />
                </TouchableOpacity>
                <View style={styles.Headding}>
                    <Text style={styles.Headding_Text}>
                        Terms & Condition
                    </Text>
                </View>
            </View>
            <View style={styles.conditions}>
                <Text style={{fontWeight:'bold', color:'black', fontSize:15}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknownprinter took a galley of type and scrambled it to make a type 
                specimen book.
                </Text>
                <Text style={{fontWeight:'bold', color:'black', fontSize:15}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknownprinter took a galley of type and scrambled it to make a type 
                specimen book.
                </Text>
                <Text style={{fontWeight:'bold', color:'black', fontSize:15}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknownprinter took a galley of type and scrambled it to make a type 
                specimen book.
                </Text>
                <Text style={{fontWeight:'bold', color:'black', fontSize:15}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknownprinter took a galley of type and scrambled it to make a type 
                specimen book.
                </Text>
            </View>
        </View>
    )
}

export default TermsAndCondition

const styles = StyleSheet.create({
    conditions:{
        flex:1,
        marginTop:30,
        padding:20,
    },
    Headding_Text: {
        fontSize: 20,
        color:'white',
        marginRight:30,
        fontWeight:'bold'
    },
    Headding: {
        flex: 1,
        height: 75,
        fontSize: 25,
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Button: {
        height: 30,
        width: 30,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: '#EDA87E',
        backgroundColor:"white",
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20

    },
    TopBra: {
        height: 80,
        justifyContent: 'space-between',
        alignItems: "center",
        backgroundColor: 'white',
        backgroundColor: '#F05223',
        flexDirection: "row",
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
    },
    TermsAndCondition: {
        flex: 1,
    }
})