import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreens/HomeScreen';

function CheckerScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: 'black'}}>checker Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

//defaul stack
const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        options={{headerShown: false}}
        component={HomeScreen}
      />
      <Stack.Screen
        name="Checker"
        options={{headerShown: false}}
        component={CheckerScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
//default stack

export const CheckerStack = () => {
  return (
    <Stack.Navigator initialRouteName="Checker">
      <Stack.Screen
        name="Home"
        options={{headerShown: false}}
        component={HomeScreen}
      />

      <Stack.Screen
        name="Checker"
        options={{headerShown: false}}
        component={CheckerScreen}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});
