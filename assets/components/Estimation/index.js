import React from 'react';

import {Text, View, Button, TextInput,TouchableOpacity, Image} from 'react-native';

import styles from './styles';




const Estimation = ({navigation}) => {

    
    const pressAgence = () => {
        navigation.navigate('ListeAgence')
      }
    const AppButton = ({ onPress, title }) => (
        <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>{title}</Text>
        </TouchableOpacity>
    );

    return(
    <View style = {{backgroundColor:"#2AA5FF"}}>

    <View style ={styles.topText}>
        <Text style = {styles.title}>Estimation</Text>
        <Text style = {styles.title}>Rapide</Text>
    </View>

      <View style ={styles.midElements}>

            <View style = {styles.centerInputs}>

                <TextInput style = {styles.input}
                    
                    placeholder = "Surface m2"
                    placeholderTextColor = "black"
                    autoCapitalize = "none"
                    />

                <TextInput style = {styles.input}
                    
                    placeholder = "Nombre de pièces"
                    placeholderTextColor = "black"
                    autoCapitalize = "none"
                    />

                <TextInput style = {styles.input}
                    
                    placeholder = "Adresse"
                    placeholderTextColor = "black"
                    autoCapitalize = "none"
                    />

            </View>

            <View style ={styles.ButtonEsti}>

                <Button
                    color = '#2AFFFF'
                    title="Estimez !">
                </Button>
            </View>

            <View style ={styles.ButtonEstiAg}>

                <Button
                    color="#2AFFFF"
                    title="Estimation précise en agence !"
                    onPress = {pressAgence}>
                </Button>
            </View>

        </View>

    </View>

    );
};

export default Estimation;