import React from 'react';
import {AppRegistry, View} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { COLORS } from './Customs/Colors';

const Root = () => (
  <View style={{flex: 1, backgroundColor: COLORS.backgroundLight}}>
    <App />
  </View>
);

AppRegistry.registerComponent(appName, () => Root);
