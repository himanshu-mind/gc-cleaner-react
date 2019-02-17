import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Splash from './pages/Splash.js'
import Login from './pages/Login.js'
import Home from './pages/Home.js'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "splash" component = {Splash} hideNavBar={true} initial = {true} />
         <Scene key = "login" component = {Login} hideNavBar={true} />
         <Scene key = "home" component = {Home} />
      </Scene>
   </Router>
)
export default Routes