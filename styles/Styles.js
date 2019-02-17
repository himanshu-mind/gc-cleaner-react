import * as ColorConstants from '../constants/ColorConstants.js';
import {StyleSheet, Dimensions} from 'react-native';

const toolbar = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: 50,
    backgroundColor: ColorConstants.Blue,
    justifyContent: 'flex-start', 
    flexDirection: 'row'
  },
  backContainer: {
    alignSelf: 'center',
    marginLeft: 10,
  },
  backImage: {
    width: 35,
    height: 35
  },
  title: {
    color: ColorConstants.Black,
    fontSize: 24,
    textAlign: 'center',
    alignSelf: 'center',
    marginLeft: 20,
  }
});

const splash = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ColorConstants.Blue
    },
  appName: {
    color: ColorConstants.White,
    fontSize: 35,
    alignSelf: 'center',
  },
  progress: {
    marginTop: 10
  }
});

const login = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export { toolbar, splash, login }