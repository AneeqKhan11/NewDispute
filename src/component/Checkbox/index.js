import * as React from 'react';
import { Checkbox } from 'react-native-paper';
import { Text, View, StyleSheet } from 'react-native'

const Checkboxs = (props) => {
    const [checked, setChecked] = React.useState(false);
    const { title, checkedContainer } = props

    return (
        <View style={styles.Checkboxs}>
            <Checkbox
                style={[styles.checkedContainer, checkedContainer]}
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                    setChecked(!checked);
                }}
            />
            <Text>{title}</Text>
        </View>
    );
};

export default Checkboxs;

const styles = StyleSheet.create({
    Checkboxs: {
        flexDirection: 'row',
        paddingBottom:20,
        marginTop:10
    }
})