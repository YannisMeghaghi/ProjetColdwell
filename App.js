import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style ={styles.background}>

      <View style ={styles.topText}>
        <Text style = {styles.title}>Êtes-vous</Text>
      </View>

      <View style ={styles.midElements}>

        <View style = {styles.midButtons}>

          <Button 
            color = '#54AAEA'
            title = "Un agent">
          </Button>

          <Button
            color = '#54AAEA'  
            title = "Un agent"
            title = "Un particulier">
          </Button>

        </View>


      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  background:{
    flex:1,
    backgroundColor:"#2AA5FF",

  },

  topText:{
    alignItems : 'center',
    marginTop : '30%',
  },

  title:{
    fontSize: 40,
    color : '#fff',
  },
  
  midElements:{

  },

  midButtons:{
    flexDirection : 'row',
    justifyContent:'space-around',
    marginTop:'75%',
  },

  agentButton:{
    
  }
})