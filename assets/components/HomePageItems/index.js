import React from 'react';
import {Text, View, Button,Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';

const HomePageItems = (props) => {
    return(
    <View style = {{backgroundColor:"#2AA5FF"}}>

        <View style ={styles.topText}>
            <Text style = {styles.title}>Vendre son bien</Text>
        </View>

        <View style ={styles.MiddleText}>
            <Text style = {styles.title2}>Quel type de bien ?</Text>
        </View>

        <View style = {styles.mainContainer}>
            <View style = {styles.secondContainer}>
                <TouchableOpacity style = {styles.carre}>
                    <Image style = {styles.imageStyle} source = {require('../../house_38533.png')}/>
                    <Text>Maison</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style = {styles.carre}>
                    <Image style = {styles.imageStyle} source = {require('../../building-3.png')}/>
                    <Text>Appartement</Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.secondContainer2}>
                <TouchableOpacity style = {styles.carre}>
                    <Image style = {styles.imageStyle} source = {require('../../parking.png')}/>
                    <Text>Parking</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style = {styles.carre}>
                    <Image style = {styles.imageStyle} source = {require('../../shop.png')}/>
                    <Text>Bureau</Text>
                </TouchableOpacity>
            </View>
        </View> 
    </View>

    );
};

export default HomePageItems;