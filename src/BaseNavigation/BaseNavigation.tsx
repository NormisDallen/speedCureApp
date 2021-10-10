// In App.js in a new project
import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DraweNavigator from './DrawerNavigator/DraweNavigator';
import BottomNavigator from './BottomNavigator/BottomNavigator';

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function BaseNavigation() {
  return (
    <NavigationContainer>
        <DraweNavigator/>
    </NavigationContainer>
  );
}

export default BaseNavigation;
