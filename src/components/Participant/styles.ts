import { StyleSheet } from "react-native";

export const styles = StyleSheet.create ({
    container: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 5, 
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },

    name: {
        flex: 1,
        color: 'black',
        fontSize: 18,
        marginLeft: 16
    },
    buttonText: {
        color: 'white',
        fontSize: 24
    },

    button: {
       width: 56,
       height: 56, 
       borderRadius: 5,
       backgroundColor: 'red',
       alignItems: 'center',
       justifyContent: 'center'
    }
});