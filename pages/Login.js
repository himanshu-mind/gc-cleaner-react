import React from 'react'
import { TouchableOpacity, Text, View, BackHandler, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { AppName } from '../constants/AppConstants.js';
import { login } from '../styles/Styles.js';
import Toolbar from '../views/Toolbar.js';

const Login = () => {

    BackHandler.addEventListener('hardwareBackPress', () => {
        backPressed();
        return true;
    });

    function backPressed() {
        Alert.alert(
            'Alert',
            'My Alert Msg',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {
                    text: 'OK', 
                    onPress: () => console.log('OK Pressed')
                },
            ],
            {cancelable: false},
        );
    }

    return (
        <View style = {login.container}>
            <Toolbar 
                text = "Login" 
                showBack = { true }
                onClick = { backPressed() } />
        </View>
    )
}
export default Login