import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthBar from '../../components/AppBars/AuthBar';
import {theme} from '../../theme/theme';
import MapScreen from '../../screens/MapScreens/MapScreen';
const Stack = createNativeStackNavigator();
const MapStack = () => {
  return (
    <Stack.Navigator initialRouteName="MapScreen">
      <Stack.Screen
        name="MapScreen"
        options={{
          headerShown: false,
        }}
        component={MapScreen}
      />
    </Stack.Navigator>
  );
};

export default MapStack;

const styles = StyleSheet.create({});
