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
} from "react-native";

import styles from './styles';

/*export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");*/
  const LoginPage = (props) => {
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
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn}>
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