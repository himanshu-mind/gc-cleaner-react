import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };

    // Toggle the state every second
    setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), 1000);
  }

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return (
      <Text>{this.props.text}</Text>
    );
  }
}

export default class App extends Component {
    render() {
      return (
        <View style={appStyles.container}>
          <View style={appStyles.tbar}>
          <Text style={appStyles.text}>Hello</Text>
          </View>
        </View>
      );
    }

  // render() {
  //   return (
  //     <View>
  //       <Blink text='I love to blink' />
  //       <Blink text='Yes blinking is so great' />
  //       <Blink text='Why did they ever take this out of HTML' />
  //       <Blink text='Look at me look at me look at me' />
  //     </View>
  //   );
  // }

  // render() {
  //   let pic = {
  //     uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
  //   };
  //   return (
  //     <Image source={pic} style={{width: 193, height: 110}}/>
  //   );
  // }

  // render() {
  //   return (
  //     <View style={styles.container}>
  //       <Text style={styles.welcome}>Welcome to React Native!</Text>
  //       <Text style={styles.instructions}>To get started, edit App.js</Text>
  //       <Text style={styles.instructions}>{instructions}</Text>
  //     </View>
  //   );
  // }
}

const appStyles = StyleSheet.create({
  tbar: {
    width: 375,
    height: 100,
    borderBottomWidth: 5,
    borderColor: 'black',
    backgroundColor: 'red'
  },
  container: {
    flex: 1
  },
  text: {
    color: '#ffffff',
    fontSize: 40,
    textAlign: 'center'
  }
});

const styles = StyleSheet.create({
  tbar: {
    width: 375,
    height: 100,
    borderBottomWidth: 5,
    borderColor: 'black',
    backgroundColor: 'red'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
