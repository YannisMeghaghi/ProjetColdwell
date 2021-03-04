import React from 'react';
import {Text, View, Image, TextInput, Slider, TouchableOpacity, ScrollView,} from 'react-native';
import styles from './styles';

const ListeAgence = (props) => {
    return(
        <View style = {{backgroundColor:"#2AA5FF"}}>
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

        </View>
    );
    };

export default ListeAgence;