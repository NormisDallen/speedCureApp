import {} from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PaymentDetails from './PaymentDetails';
import AddCard from './AddCard';
import EditCard from './EditCard';
import { useNavigation } from '@react-navigation/native';
import PaymentSucces from './PaymentSucces';
import { theme } from '../../../theme/theme';
import AppBar from '../../../components/AppBars/AppBar';

const Stack = createNativeStackNavigator();

const PaymentStack = () => {
  const navigation = useNavigation<any>();

  const moveToTop = () => {
    navigation.popToTop();
    navigation.navigate('Payment');
  };
  return (
    <Stack.Navigator
      initialRouteName="PaymentDetails"
      // set the navigation options for the stack
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTitleStyle: {
          fontSize: 25,
        },
        headerTintColor: theme.colors.text,
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        name="PaymentDetails"
        component={PaymentDetails}
        options={({route}) => ({
          header: props => (
            <AppBar
              {...props}
              showCart
              title="Payment"
              subTitle="We deliver at your door"
              barStyle={{
                backgroundColor: `${theme.colors.primary}`,
                width: '100%',
                elevation: 0,
              }}
              titleStyle={{
                marginTop:5,
                alignSelf: 'center',
                color: `${theme.colors.text}`,
                marginLeft:-60
              }}
              subtitleStyle={{
                alignSelf: 'center',
                color: `${theme.colors.text}`,
                marginLeft:-60
              }}
              
            />
          ),
        })}
      />
      <Stack.Screen
        name="AddCard"
        component={AddCard}
        options={({route}) => ({
          header: props => (
            <AppBar
              {...props}
              showCart
              title="Add Card"
              subTitle="We deliver at your door"
              barStyle={{
                backgroundColor: `${theme.colors.primary}`,
                width: '100%',
                elevation: 0,
              }}
              titleStyle={{
                marginTop:5,
                alignSelf: 'center',
                color: `${theme.colors.text}`,
                marginLeft:-60
              }}
              subtitleStyle={{
                alignSelf: 'center',
                color: `${theme.colors.text}`,
                marginLeft:-60
              }}
              
            />
          ),
        })}
      />
      <Stack.Screen
        name="EditCard"
        component={EditCard}
        options={({route}) => ({
          header: props => (
            <AppBar
              {...props}
              showCart
              title="Edit Card"
              subTitle="We deliver at your door"
              barStyle={{
                backgroundColor: `${theme.colors.primary}`,
                width: '100%',
                elevation: 0,
              }}
              titleStyle={{
                marginTop:5,
                alignSelf: 'center',
                color: `${theme.colors.text}`,
                marginLeft:-60
              }}
              subtitleStyle={{
                alignSelf: 'center',
                color: `${theme.colors.text}`,
                marginLeft:-60
              }}
              
            />
          ),
        })}
      />
      <Stack.Screen
        name="PaymentSuccess"
        component={PaymentSucces}
        options={({route}) => ({
          header: props => (
            <AppBar
              {...props}
              showCart
              title="KIU Store"
              subTitle="We deliver at your door"
              barStyle={{
                backgroundColor: `${theme.colors.primary}`,
                width: '100%',
                elevation: 0,
              }}
              titleStyle={{
                marginTop:5,
                alignSelf: 'center',
                color: `${theme.colors.text}`,
                marginLeft:-60
              }}
              subtitleStyle={{
                alignSelf: 'center',
                color: `${theme.colors.text}`,
                marginLeft:-60
              }}
              
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default PaymentStack;
