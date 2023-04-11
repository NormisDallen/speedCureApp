import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthBar from '../../components/AppBars/AuthBar';
import {theme} from '../../theme/theme';
import MapScreen from '../../screens/MapScreens/MapScreen';
import ServiceScreen from '../../screens/ServiceScreens/ServiceScreen';
const Stack = createNativeStackNavigator();
const ServiceStack = () => {
  return (
    <Stack.Navigator initialRouteName="Hospital">
      <Stack.Screen
        name="Hospital"
        options={({route}) => ({
          header: props => (
            <AuthBar
              {...props}
              title={`Khan Hospital`}
              back={true}
              previous
              titleStyle={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white',
              }}
              headerStyles={{
                backgroundColor: theme.colors.primary,
                elevation: 0,
              }}
            />
          ),
        })}
        component={ServiceScreen}
      />
    </Stack.Navigator>
  );
};

export default ServiceStack;
