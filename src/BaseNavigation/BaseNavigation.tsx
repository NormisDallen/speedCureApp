// In App.js in a new project
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DraweNavigator from './DrawerNavigator/DraweNavigator';

const Stack = createNativeStackNavigator();

function BaseNavigation() {
  return (
    <NavigationContainer>
      <DraweNavigator />
    </NavigationContainer>
  );
}

export default BaseNavigation;
