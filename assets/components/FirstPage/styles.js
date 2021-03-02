import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  topText:{
    alignItems : 'center',
    marginTop : '30%',
  },

  title:{
    fontSize: 40,
    color : '#fff',
  },
  
  midElements:{
    flexDirection : 'row',
    justifyContent : 'space-around',
    marginTop : 125,
  },
  
  carre:{
    alignItems : "center",
    justifyContent : "center",
    backgroundColor : "#BBECFD",
    borderRadius : 20,
    width : 150,
    height : 150,
  },

  userStyle:{
    width: 120,
    height : 120,
  },

  agentStyle:{
    width: 130,
    height : 130,
  },

  midText:{
    flexDirection : 'row',
    justifyContent : 'space-around',
    marginLeft : -15,
  },

  textStyle:{
    color: '#fff',
    fontSize: 20,
  },
});

export default styles;