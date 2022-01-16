import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomNavigator from '../BottomNavigator/BottomNavigator';
import DrawerContentComponent from '../../components/Drawer/DrawerContent';
import {IonIcon} from '../../components/Icons/Icons';
import AppBar from '../../components/AppBars/AppBar';
import {theme} from '../../theme/theme';
import DrugStoreScreen from '../../screens/DrugStore/DrugStore';
import MapStack from '../StackNavigator/MapStack';
import ServiceStack from '../StackNavigator/ServiceStack';
import ChatStack from '../StackNavigator/ChatStack';

const Drawer = createDrawerNavigator();

const DraweNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="YoHealth"
      backBehavior="history"
      drawerContent={props => <DrawerContentComponent {...props} />}>
      <Drawer.Screen
        name="YoHealth"
        component={BottomNavigator}
        options={{
          title: 'YoHealth',
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

      {/*map */}
      <Drawer.Screen
        name="MapStack"
        component={MapStack}
        options={{
          headerShown: false,
        }}
      />

      {/*services */}
      <Drawer.Screen
        name="hospitals"
        component={ServiceStack}
        options={{
          headerShown: false,
        }}
      />
      {/*services */}

      {/*map */}

      {/*chat screen */}
      <Drawer.Screen
        name="Chat"
        component={ChatStack}
        options={{
          headerShown: false,
        }}
      />

      {/*chat screen */}
    </Drawer.Navigator>
  );
};

export default DraweNavigator;
