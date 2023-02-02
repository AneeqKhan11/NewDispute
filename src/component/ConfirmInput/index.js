import { StyleSheet} from 'react-native'
import React from 'react'
import CodeInput from 'react-native-confirmation-code-input';


const ConfirmInput = () => {
    return (
        <CodeInput
            autoFocus={false}
            space={4}
            placeholder='*'
            keyboardType="numeric"
            secureTextEntry
            codeLength={4}
            activeColor="#FAFAFA"
            codeInputStyle={{ borderBottomWidth: 3, borderBottomColor: '#E1E1E1', fontSize: 30, marginLeft: 25 }}
        />
    )
}

export default ConfirmInput

const styles = StyleSheet.create({})