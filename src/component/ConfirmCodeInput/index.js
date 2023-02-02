import { StyleSheet} from 'react-native'
import React from 'react'
import CodeInput from 'react-native-confirmation-code-input';


const ConfirmCodeInput = () => {
    return (
        <CodeInput
            autoFocus={false}
            space={4}
            placeholder='*'
            keyboardType="numeric"
            secureTextEntry
            codeLength={4}
            activeColor="#FAFAFA"
            codeInputStyle={{ borderBottomWidth: 3, borderBottomColor: '#8F8F8F', fontSize: 30, marginLeft: 15 }}
        />
    )
}

export default ConfirmCodeInput

const styles = StyleSheet.create({})