import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomNavigator from '../BottomNavigator/BottomNavigator';
import DrawerContentComponent from '../../components/Drawer/DrawerContent';
import {IonIcon} from '../../components/Icons/Icons';
import AppBar from '../../components/AppBars/AppBar';
import {theme} from '../../theme/theme';
import DrugStoreScreen from '../../screens/DrugStore/DrugStore';

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
      backBehavior="history"
      drawerContent={props => <DrawerContentComponent {...props} />}>
      <Drawer.Screen
        name="SpeedCure"
        component={BottomNavigator}
        options={{
          title: 'SpeedCure',
          drawerIcon: ({focused, size}) => (
            <IonIcon name="md-home" size={size} color={`red`} />
          ),
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="DrugStore"
        component={DrugStoreScreen}
        options={({route}) => ({
          header: props => (
            <AppBar
              {...props}
              title="Drug Store"
              subTitle="We deliver at your door"
              barStyle={{
                backgroundColor: `${theme.colors.text}`,
                width: '100%',
                elevation: 5,
              }}
              titleStyle={{
                marginTop: 5,

                alignSelf: 'center',
                color: `${theme.colors.primary}`,
              }}
              subtitleStyle={{
                alignSelf: 'center',
                color: `${theme.colors.placeholder}`,
              }}
            />
          ),
        })}
      />
    </Drawer.Navigator>
  );
};

export default DraweNavigator;

const styles = StyleSheet.create({});
