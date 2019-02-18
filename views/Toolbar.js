import React, { Component } from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import { toolbar } from '../styles/Styles.js';
const back = require('../images/back.png');

export default class Toolbar extends Component {

    zxc = () => {
        alert("Hello");
        // this.props.navigation.goBack(null);
    };

    render() {
        // if (this.props.showBack)
            return(
                <View style = { toolbar.container }>
                    {
                        this.props.showBack 
                            ?   { <TouchableOpacity style = { toolbar.backContainer } onPress = { this.zxc }>
                                    <Image style = { toolbar.backImage } source = { back } />
                                   </TouchableOpacity>    
                                }
                            : null
                    }
                    <Text style = { toolbar.title }>{ this.props.text }</Text>
                </View>
            );
//         else
//             return (
//                 <View style = { toolbar.container }>
//                     <Text style = { toolbar.title }>{ this.props.text }</Text>
//                 </View>
//             );
    }
  }
