import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.SquareShapeView}/>
      <Text style ={styles.textTitle}>
        Êtes-vous
      </Text>

      <Text style={styles.textSubTitle1}>
        Un agent            Un Particulier    
      </Text>

      
      {/* <Image
        style={{
          width: 101,//100
          height: 100,
          left : 90,
          top:-25
          
        }}
        source={require("./assets/user.png")}
      /> */}
      <Image
        style={{
          width: 500,
          height: 800,
          left : 80,
          top:-250
          
        }}
        source={require("./assets/user.png")}
      />
      <Image 
        style={{
          width: 125,
          height: 125,
          right : 110,
          top: -135
        }}
        source={require("./assets/boy-with-tie-reading-a-speech.png")}
      />

      <StatusBar style="auto" />
    </SafeAreaView>

    
  );
}