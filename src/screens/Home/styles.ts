import { StyleSheet } from "react-native"
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#008080',
      padding: 24
    },
  
    eventName: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 48
    },
  
    eventLocal: {
      color: 'white',
      fontSize: 18
    },

    input: {
        flex: 1,
        height: 56,
        backgroundColor: 'white',
        borderRadius: 5,
        color: 'black',
        padding: 16,
        fontSize: 18,
        marginRight: 7
    },

    buttonText: {
        color: 'white',
        fontSize: 18
    },

    button: {
       width: 56,
       height: 56, 
       borderRadius: 5,
       backgroundColor: 'green',
       alignItems: 'center',
       justifyContent: 'center'
    },

    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 42
    },
     
    ListEmptyText: {
      color: 'white',
      fontSize: 16,
      textAlign: 'center'
    }
  });