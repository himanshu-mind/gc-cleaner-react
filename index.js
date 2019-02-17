import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import Routes from './Routes.js'

class GcApp extends Component {
    render() {
       return (
          <Routes />
       )
    }
 }
 export default GcApp

 AppRegistry.registerComponent(appName, () => GcApp)

// AppRegistry.registerComponent(appName, () => App);
