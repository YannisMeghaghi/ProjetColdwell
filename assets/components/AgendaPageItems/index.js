import React from 'react';
import {Text, View, Button ,Image} from 'react-native';
import styles from './styles';


const AgendaPageItems = (props) => {
    return(
    <View>

        <View style ={styles.topText}>
            <Text style = {styles.title}>Disponibilités</Text>
        </View>

        <View style ={styles.ViewImage1}>
            <Image style = {styles.Images} source = {require ('../../calendar.png')}/>
            
        </View>

        <View style = {styles.midButtons}>
                    
                    <Button
                        color = '#000'
                        title = "Choisir une date"
                        >
                    </Button>
        </View>

        <View style ={styles.BottomText}>
            <Text style = {styles.BottomTitle}>Contact</Text>
        </View>

        <View style ={styles.BottomText}>
            <Text style = {styles.BottomTitle2}>Contactez nous par mail à l'adresse : .......@.....fr</Text>
            <Text style = {styles.BottomTitle2}>Ou alors appelez nous au 06............81</Text>
        </View>

      
            

            
    </View>  
    

    );
};

export default AgendaPageItems;