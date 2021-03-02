import { StyleSheet } from 'react-native';

const styles2 = StyleSheet.create({
    Deconnexion:{
        flexDirection : "row-reverse",
        marginTop : '12%',
        marginLeft : 20,
      },
    
      boutons:{
        alignItems : "center",
        justifyContent : "center",
        backgroundColor : "#BBECFD",
        borderRadius : 20,
        width : 100,
        height : 25,
      },
    
      inputStyle:{
        borderWidth : 1,
        borderColor: '#fff',
        padding : 4,
        margin: 20,
        borderRadius : 15,
        color: "#fff",
      },
    
      tags:{
        flexDirection: "row",
        justifyContent: "space-around",
        margin : 0,
      },
    
      prixSlider:{
        flexDirection: "row",
        marginTop : 15,
        marginLeft : 30,
      },
    
      textPrix:{
        color : "#fff"
      },
    
      sliderStyle:{
        marginLeft : -8,
        width : 150,
      },
    
      maisonListe:{
        flexDirection : "column",
      },
    
      imageMaison:{
        width : 75,
        height : 75,
        marginLeft : 15,
      },
    
      imageCoeur:{
        marginLeft : 200,
        width : 40,
        height : 35,
      },
    
      rectangle:{
        flexDirection : "row",
        marginTop: 15,
        borderWidth : 3,
        borderColor :"#BBECFD",
        backgroundColor : "#BBECFD",
        height : 110,
        width : 350,
        alignItems : "center",
        borderRadius : 25,
      },
});

export default styles2;