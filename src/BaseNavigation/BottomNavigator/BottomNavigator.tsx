import React from 'react';
import {View, Text} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import StackNavigator from '../StackNavigator/StackNavigator';
import {MenuStack} from '../StackNavigator/StackNavigator';
import {theme} from '../../theme/theme';
import {Avatar} from 'react-native-paper';
import {IonIcon, MaterialCommunityIcon} from '../../components/Icons/Icons';

const Tab = createMaterialBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Nicolas</Text>
    </View>
  );
}

export default function BottomNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      activeColor={`${theme.colors.text}`}
      barStyle={{backgroundColor: theme.colors.primary}}
      labeled={false}>
      <Tab.Screen
        name="HomeTab"
        component={StackNavigator}
        options={{
          tabBarLabel: 'HomeTab',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcon name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuStack}
        options={{
          tabBarLabel: 'Menu',
          tabBarIcon: ({color}) => (
            <IonIcon name="apps" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={MenuStack}
        options={{
          tabBarLabel: 'search',
          tabBarIcon: ({color}) => (
            <IonIcon name="search" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={MenuStack}
        options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcon name="bell" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
