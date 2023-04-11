import React from 'react';
import { View, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import StackNavigator from '../StackNavigator/StackNavigator';
import { MenuStack } from '../StackNavigator/StackNavigator';
import { theme } from '../../theme/theme';
import { Avatar } from 'react-native-paper';
import { IonIcon, MaterialCommunityIcon } from '../../components/Icons/Icons';
import DrugStoreScreen from '../../screens/DrugStore/DrugStore';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fixtures from '../../screens/HomeScreens/Fixtures';


const Tab = createMaterialBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Nicolas</Text>
    </View>
  );
}

export default function BottomNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      activeColor={`${theme.colors.text}`}
      barStyle={{ backgroundColor: theme.colors.primary }}
      labeled={false}>
      <Tab.Screen
        name="HomeTab"
        component={StackNavigator}
        options={{
          tabBarLabel: 'HomeTab',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcon name="home" color={color} size={26} />
          ),
        }}
      />

      {/* shop */}
      <Tab.Screen
        name="Shop"
        component={DrugStoreScreen}
        options={{
          tabBarLabel: 'Menu',
          tabBarIcon: ({ color }) => (
            <AntDesign name="shoppingcart" size={26} color={color} />
          ),
        }}
      />
      {/* shop */}

      {/*  fixtures*/}
      <Tab.Screen
        name="Fixtures"
        component={Fixtures}
        options={{
          tabBarLabel: 'Fixtures',
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="book-open" size={24} color={color} />
          ),
        }}
      />
      {/* fixtures */}


      <Tab.Screen
        name="Menu"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Menu',
          tabBarIcon: ({ color }) => (
            <IonIcon name="apps" size={26} color={color} />
          ),
        }}
      />


    </Tab.Navigator>
  );
}
