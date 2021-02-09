import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import FirstPageItems from './assets/components/FirstPage';

export default function App() {
  return (
    <View style ={styles.background}>

    <FirstPageItems/>


    </View>
  );
}

const styles = StyleSheet.create({
  background:{
    flex:1,
    backgroundColor:"#2AA5FF",

  },

})