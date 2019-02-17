import React from 'react'
import { ActivityIndicator, Text, View, BackHandler } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { AppName } from '../constants/AppConstants.js';
import * as ColorConstants from '../constants/ColorConstants.js';
import { splash } from '../styles/Styles.js';

const Splash = () => {
    BackHandler.addEventListener('hardwareBackPress', () => {
        BackHandler.exitApp();
    });

    setTimeout(() => {
        Actions.reset("login")
   }, 2000);

   return (
        <View style = {splash.container}>
            <Text style = {splash.appName}>
                { AppName }
            </Text>
            <ActivityIndicator 
                style = {splash.progress} 
                size="large" 
                color={ColorConstants.Black} />
        </View>
   )
}
export default Splash