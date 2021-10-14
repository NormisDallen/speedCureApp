import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomNavigator from '../BottomNavigator/BottomNavigator';
import DrawerContentComponent from '../../components/Drawer/DrawerContent';

function HomeScreen({navigation}: any) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({navigation}: any) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}
const Drawer = createDrawerNavigator();

const DraweNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="SpeedCure"
      drawerContent={props => <DrawerContentComponent {...props} />}>
      <Drawer.Screen name="SpeedCure" component={BottomNavigator} />
    </Drawer.Navigator>
  );
};

export default DraweNavigator;

const styles = StyleSheet.create({});
