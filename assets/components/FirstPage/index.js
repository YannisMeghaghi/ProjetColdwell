import React from 'react';
import {Text, View, Button} from 'react-native';
import styles from './styles';

const FirstPageItems = (props) => {
    return(
    <View>

    <View style ={styles.topText}>
        <Text style = {styles.title}>Êtes-vous</Text>
    </View>

      <View style ={styles.midElements}>

            <View style = {styles.midButtons}>

                <Button
                    color = '#54AAEA'
                    title = "Un agent">
                </Button>

                <Button
                    color = '#54AAEA'
                    title = "Un particulier">
                </Button>

            </View>
        </View>
    </View>

    );
};

export default FirstPageItems;