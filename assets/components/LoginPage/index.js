import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  FlatList
} from "react-native";

import GeneralPage from "../GeneralPage";

import styles from './styles';





  const LoginPage = ({navigation}) => {

    const pressHandler = () => {
      navigation.navigate('GeneralPage')
    }
    const [account, setAccount] = useState([
      { email : 'Yannis', password : 'MDP'}
    ])

    /*const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");*/

      return(
    <View style={styles.container}>

       <View>
        <Image style = {styles.image} 
          source = {require ('../../Coldwell.png')}
        /> 
      </View> 

      <StatusBar style="auto" />

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email"
            placeholderTextColor="#003f5c"
            onChangeText={(text) => item.email = text}
          />
        </View>



      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(text) => item.password = text}
        />
      </View>


      <TouchableOpacity style={styles.loginBtn} onPress ={navigation.navigate('GeneralPage')}>
        <Text style={styles.loginText}>CONNEXION</Text>
      </TouchableOpacity>


      <TouchableOpacity>
        <Text style={styles.forgot_button}>Mot de passe oublié ?</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Vous n'avez pas de compte ? Inscrivez-vous !</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Connexion sans compte</Text>
      </TouchableOpacity>


    </View>
  );
}

export default LoginPage;
