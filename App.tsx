import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BaseNavigation from './src/BaseNavigation/BaseNavigation';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
    return () => {};
  }, []);
  return <BaseNavigation />;
};

export default App;
