import React from 'react';
import {Text, View, Image, TextInput, Slider, TouchableOpacity, ScrollView,} from 'react-native';
import styles from './styles';

const ListeAgence = (props) => {
    return(
        <View>
            <View style = {styles.topText}>
      <Text style = {styles.textStyle}>Liste des Agences</Text>
    </View>  

    <ScrollView>
      <View style = {{alignItems : "center"}}>

        <TouchableOpacity style = {styles.rectangle}>
          <Image style = {styles.imageMaison} source = {require("../../1.jpg")}/>
          <Text style = {styles.textAgence}>Agence n°1</Text>
          <Image style = {styles.imageCoeur} source = {require("../../gray-heart-hi.png")}/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.rectangle}>
          <Image style = {styles.imageMaison} source = {require("../../1.jpg")}/>
          <Text style = {styles.textAgence}>Agence n°1</Text>
          <Image style = {styles.imageCoeur} source = {require("../../gray-heart-hi.png")}/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.rectangle}>
          <Image style = {styles.imageMaison} source = {require("../../1.jpg")}/>
          <Text style = {styles.textAgence}>Agence n°1</Text>
          <Image style = {styles.imageCoeur} source = {require("../../gray-heart-hi.png")}/>
        </TouchableOpacity>
        
        <TouchableOpacity style = {styles.rectangle}>
          <Image style = {styles.imageMaison} source = {require("../../1.jpg")}/>
          <Text style = {styles.textAgence}>Agence n°1</Text>
          <Image style = {styles.imageCoeur} source = {require("../../gray-heart-hi.png")}/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.rectangle}>
          <Image style = {styles.imageMaison} source = {require("../../1.jpg")}/>
          <Text style = {styles.textAgence}>Agence n°1</Text>
          <Image style = {styles.imageCoeur} source = {require("../../gray-heart-hi.png")}/>
        </TouchableOpacity>


        <TouchableOpacity style = {styles.rectangle}>
          <Image style = {styles.imageMaison} source = {require("../../1.jpg")}/>
          <Text style = {styles.textAgence}>Agence n°1</Text>
          <Image style = {styles.imageCoeur} source = {require("../../gray-heart-hi.png")}/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.rectangle}>
          <Image style = {styles.imageMaison} source = {require("../../1.jpg")}/>
          <Text style = {styles.textAgence}>Agence n°1</Text>
          <Image style = {styles.imageCoeur} source = {require("../../gray-heart-hi.png")}/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.rectangle}>
          <Image style = {styles.imageMaison} source = {require("../../1.jpg")}/>
          <Text style = {styles.textAgence}>Agence n°1</Text>
          <Image style = {styles.imageCoeur} source = {require("../../gray-heart-hi.png")}/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.rectangle}>
          <Image style = {styles.imageMaison} source = {require("../../1.jpg")}/>
          <Text style = {styles.textAgence}>Agence n°1</Text>
          <Image style = {styles.imageCoeur} source = {require("../../gray-heart-hi.png")}/>
        </TouchableOpacity>


        <TouchableOpacity style = {styles.rectangle}>
          <Image style = {styles.imageMaison} source = {require("../../1.jpg")}/>
          <Text style = {styles.textAgence}>Agence n°1</Text>
          <Image style = {styles.imageCoeur} source = {require("../../gray-heart-hi.png")}/>
        </TouchableOpacity>


        <TouchableOpacity style = {styles.rectangle}>
          <Image style = {styles.imageMaison} source = {require("../../1.jpg")}/>
          <Text style = {styles.textAgence}>Agence n°1</Text>
          <Image style = {styles.imageCoeur} source = {require("../../gray-heart-hi.png")}/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.rectangle}>
          <Image style = {styles.imageMaison} source = {require("../../1.jpg")}/>
          <Text style = {styles.textAgence}>Agence n°1</Text>
          <Image style = {styles.imageCoeur} source = {require("../../gray-heart-hi.png")}/>
        </TouchableOpacity>

        
      </View>
</ScrollView>
<View>
  <Text style = {{fontSize : 17}}>BONJOUR IL FAUT METTRE LE BOUTON RETOUR</Text>
</View>
        </View>
    );
    };

export default ListeAgence;