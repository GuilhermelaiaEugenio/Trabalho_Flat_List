import { StyleSheet } from  'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#245c9c',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonContainer: {
      marginTop: 50,
      marginBottom: 20,
      width: '80%',
    },
    list: {
      marginTop: 32,
      width: '80%',
      borderRadius: 7,
    },
    itemList: {
      padding: 24,
      borderRadius: 7,
      backgroundColor: '#0669bb',
      marginBottom: 16,
    },
    itemText: {
      color: '#FFF',
    },
    inputContainer: {
      marginTop: 20,
      width: '80%', 
    },
    input:{
      height: 40, 
      borderColor: '#ddd',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      paddingVertical: 8, 
      color: '#FFF', 
    }
  });