import React from 'react';
import { render } from 'react-dom';
import {Text, View, Image, TextInput, Slider, TouchableOpacity, ScrollView, Button} from 'react-native';
import styles from './styles';

const GeneralPage = ({navigation}) => {
  
  const pressVendre = () => {
    navigation.navigate('HomePageItems')
  }

    return(
    <View style = {{backgroundColor:"#2AA5FF"}}>
        <View style ={styles.Deconnexion}>

        <TouchableOpacity style = {styles.boutons}>
          <Text style = {{color:"#000"}}>Deconnexion</Text>
        </TouchableOpacity>

      </View>

      <View>
        <TextInput 
          style = {styles.inputStyle}
          placeholder = "Rechercher"
          placeholderTextColor = "#fff"        
        />
      </View>

      <View style = {styles.tags}>

        <TouchableOpacity style = {styles.boutons}>
          <Text>+ Ville</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.boutons}>
          <Text>+ Surface</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.boutons}>
          <Text>+ Type</Text>
        </TouchableOpacity>

      </View>

      <View style = {styles.prixSlider}>
        <Text style = {styles.textPrix}>Prix  0€</Text>
        
        <Text style = {styles.textPrix}>10 000 000€</Text>
      </View>
<View>
  <Text>Bonjouur : {navigation.getParam('email')}</Text>
</View>
<ScrollView>
      <View style = {{alignItems : "center"}}>
        <TouchableOpacity style = {styles.rectangle}>
          <Image style = {styles.imageMaison} source = {require("../../1.jpg")}/>
          <Image style = {styles.imageCoeur} source = {require("../../gray-heart-hi.png")}/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.rectangle}>
        <Image style = {styles.imageMaison} source = {require("../../1.jpg")}/>
          <Image style = {styles.imageCoeur} source = {require("../../gray-heart-hi.png")}/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.rectangle}>
        <Image style = {styles.imageMaison} source = {require("../../1.jpg")}/>
          <Image style = {styles.imageCoeur} source = {require("../../gray-heart-hi.png")}/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.rectangle}>
        <Image style = {styles.imageMaison} source = {require("../../1.jpg")}/>
          <Image style = {styles.imageCoeur} source = {require("../../gray-heart-hi.png")}/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.rectangle}>
        <Image style = {styles.imageMaison} source = {require("../../1.jpg")}/>
          <Image style = {styles.imageCoeur} source = {require("../../gray-heart-hi.png")}/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.rectangle}>
        <Image style = {styles.imageMaison} source = {require("../../1.jpg")}/>
          <Image style = {styles.imageCoeur} source = {require("../../gray-heart-hi.png")}/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.rectangle}>
        <Image style = {styles.imageMaison} source = {require("../../1.jpg")}/>
          <Image style = {styles.imageCoeur} source = {require("../../gray-heart-hi.png")}/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.rectangle}>
        <Image style = {styles.imageMaison} source = {require("../../1.jpg")}/>
          <Image style = {styles.imageCoeur} source = {require("../../gray-heart-hi.png")}/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.rectangle}>
        <Image style = {styles.imageMaison} source = {require("../../1.jpg")}/>
          <Image style = {styles.imageCoeur} source = {require("../../gray-heart-hi.png")}/>
        </TouchableOpacity>
      </View>
</ScrollView>

  <View style = {{flexDirection: 'row', justifyContent : 'center', alignItems: 'center'}}>
      <Button title = 'Vendre' onPress= {pressVendre}/>
      <Button title = 'Acheter'/>
      <Button title = 'Affaires'/>
  </View>

</View>
    );
};

export default GeneralPage;