import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    topText:{
        alignItems : 'flex-start',
        marginTop : '20%',
        marginLeft : 10,
      },
    
      title:{
        fontSize: 40,
        color : '#fff',
      },
    MiddleText:{
        alignItems : 'flex-start',
        marginTop : '10%',
        marginLeft : 10,
      },
        
        title2:{
            fontSize: 20,
            color : '#fff',
    },

    mainContainer:{
      alignItems : 'center',
    },

    secondContainer:{
      flexDirection :'row',
      justifyContent : 'space-between',
      marginTop : 50,
      
    },

    secondContainer2:{
      flexDirection :'row',
      justifyContent : 'space-between',
      marginTop : 30,
      
    },

    carre:{
      alignItems : "center",
      justifyContent : "center",
      backgroundColor : "#BBECFD",
      borderRadius : 20,
      width : 150,
      height : 150,
      marginLeft : 15,
      marginRight : 15,
    },

    imageStyle:{
      width: 110,
      height : 110,
    },


});

export default styles;