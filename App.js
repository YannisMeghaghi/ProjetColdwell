import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View, Image, ImageBackground, TextInput, Slider, TouchableOpacity, ScrollView, Touchable } from 'react-native';
import FirstPage from './assets/components/FirstPage';
import GeneralPage from './assets/components/GeneralPage';
import ListeAgence from './assets/components/ListeAgence';
import Estimation from './assets/components/Estimation';
import AgendaPageItems from './assets/components/AgendaPageItems';
import HomePageItems from './assets/components/HomePageItems';
import LoginPage from './assets/components/LoginPage';


export default function App() {
  return (
  <View style ={styles.background}>
    <LoginPage/>
  </View>
  );
};

const styles = StyleSheet.create({
  background:{
    flex:1,
    backgroundColor:"#2AA5FF",
  },
});