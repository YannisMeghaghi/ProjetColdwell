import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import FirstPage from '../assets/components/FirstPage/index';
import LoginPage from '../assets/components/LoginPage/index';
import GeneralPage from '../assets/components/GeneralPage/index';
import HomePageItems from '../assets/components/HomePageItems/index';
import Estimation from '../assets/components/Estimation/index';
import ListeAgence from '../assets/components/ListeAgence/index';
import AgendaPageItems from '../assets/components/AgendaPageItems/index'

const screens = {
    FirstPage:{
        screen: FirstPage
    },

    LoginPage:{
        screen: LoginPage
    },

    GeneralPage:{
        screen: GeneralPage
    },

    HomePageItems:{
        screen : HomePageItems
    },

    Estimation:{
        screen: Estimation,
    },

    ListeAgence:{
        screen: ListeAgence
    },

    AgendaPageItems:{
        screen: AgendaPageItems
    },


}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);