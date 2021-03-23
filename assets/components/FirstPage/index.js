import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import styles from './styles';

const FirstPage = ({navigation}) => {

  const pressParticulier = () => {
    navigation.navigate('LoginPage')
  }
    return(
<View style = {{backgroundColor:"#2AA5FF"}} >
      <View style ={styles.topText}>
        <Text style = {styles.title}>Vous êtes</Text>
      </View>

      <View style ={styles.midElements}>


        <TouchableOpacity style = {styles.carre} onPress = {pressParticulier}>
          <View>
            <Image source = {require('../../user.png')} style = {styles.userStyle}/>
          </View>

        </TouchableOpacity>

        <TouchableOpacity style = {styles.carre}>
          <Image source = {require('../../iconAgent.png')} style = {styles.agentStyle}/>
        </TouchableOpacity>


      </View>

      <View style = {styles.midText}>
        <Text style = {styles.textStyle}>Un particulier</Text>
        <Text style = {styles.textStyle}>Un agent</Text>
      </View>


</View>
    );
};

export default FirstPage;
