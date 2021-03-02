import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({


    container: {
      flex: 1,
      backgroundColor: "#2AA5FF",
      alignItems: "center",
      justifyContent: "center",
    },
  
    image: {
      height: 200,
      width: 300,
      marginTop: -15
     
      
    },
  
    inputView: {
      backgroundColor: "#B6DDFA",
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,
  
      alignItems: "center",
    },
  
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },
  
    forgot_button: {
      height: 30,
      marginBottom: 10,
     
    },
  
    loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
      backgroundColor: "#43D5FB",
      marginBottom: 20
    },
  });

export default styles;