import React from 'react';
import {Text, View, Button,Image} from 'react-native';
import styles from './styles';

const HomePageItems = (props) => {
    return(
    <View>

        <View style ={styles.topText}>
            <Text style = {styles.title}>Vendre son bien</Text>
        </View>

        <View style ={styles.MiddleText}>
            <Text style = {styles.title2}>Quel type de bien ?</Text>
        </View>

        <View style ={styles.ViewImage1}>
            <Image style = {styles.Images} source = {require ('../../house_38533.png')}/>
            <Image style = {styles.Images} source = {require ('../../building-3.png')}/>
        </View>

      

            

                <View style = {styles.midButtons}>
                    
                    <Button
                        color = '#000'
                        title = "Maison"
                        >
                    </Button>

                    <Button
                        color = '#000'
                        title = "Appartement">
                    </Button>
                </View>

                <View style ={styles.ViewImage2}>
            <Image style = {styles.Images} source = {require ('../../parking.png')}/>
            <Image style = {styles.Images} source = {require ('../../shop.png')}/>
                 </View>



                <View style = {styles.midButtons2}>
                <Button
                    color = '#000'
                    title = "Parking">
                </Button>

                <Button
                    color = '#000'
                    title = "Bureau/Commerce">
                </Button>
                </View> 
    </View>

    );
};

export default HomePageItems;