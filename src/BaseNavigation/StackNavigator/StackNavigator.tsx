import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreens/HomeScreen';
import AppBar from '../../components/AppBars/AppBar';
import {theme} from '../../theme/theme';
import MenuScreen from '../../screens/MenuScreens/MenuScreen';
import MenuServices from '../../screens/MenuScreens/MenuServices';
import SearchAppBar from '../../components/AppBars/SearchAppBar';
import PostScreen from '../../screens/PostScreen/PostScreen';
import AuthBar from '../../components/AppBars/AuthBar';
import ServiceScreen from '../../screens/ServiceScreens/ServiceScreen';
import OnlineStoreScreen from '../../screens/ServiceScreens/OnlineStore';
import PersonBar from '../../components/AppBars/PersonBar';
import ChatScreen from '../../screens/ChatScreen/ChatScreen';

const Stack = createNativeStackNavigator();

//home stacks
const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({route}) => ({
          header: props => (
            <AppBar
              {...props}
              showCart
              title="Yo Health"
              subTitle="Your health is our pride"
              barStyle={{
                backgroundColor: `${theme.colors.text}`,
                width: '100%',
                elevation: 5,
              }}
              titleStyle={{
                marginTop: 2,

                alignSelf: 'center',
                color: `${theme.colors.primary}`,
              }}
              subtitleStyle={{
                alignSelf: 'center',
                color: `${theme.colors.placeholder}`,
                marginBottom: 5,
              }}
            />
          ),
        })}
      />
      <Stack.Screen
        name="PostScreen"
        options={({route}) => ({
          header: props => (
            <AuthBar
              {...props}
              title={`Add a Post`}
              back={true}
              previous
              titleStyle={{
                fontSize: 20,
                fontWeight: 'bold',
                color: theme.colors.black,
              }}
              headerStyles={{backgroundColor: theme.colors.text, elevation: 0}}
            />
          ),
        })}
        component={PostScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
//default stack

//main menu stack
export const MenuStack = () => {
  return (
    <Stack.Navigator initialRouteName="MenuServices">
      <Stack.Screen
        name="MenuServices"
        options={({route}) => ({
          header: props => (
            <AppBar
              {...props}
              showCart={false}
              title="Available Services"
              barStyle={{
                backgroundColor: `${theme.colors.text}`,
                width: '100%',
                elevation: 0,
              }}
              titleStyle={{
                marginTop: 2,

                color: `${theme.colors.primary}`,
              }}
              subtitleStyle={{
                alignSelf: 'center',
                color: `${theme.colors.placeholder}`,
                marginBottom: 5,
              }}
            />
          ),
        })}
        component={MenuScreen}
      />
      <Stack.Screen
        name="Services"
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

      <Stack.Screen
        name="MenuService"
        options={{
          headerShown: false,
        }}
        component={MenuServicestack}
      />
      {/*main menu stack */}

      {/*services stack */}
      <Stack.Screen
        name="EachService"
        options={{
          header: props => (
            <SearchAppBar
              {...props}
              placeholder={`search for drugs`}
              previous={true}
            />
          ),
        }}
        component={OnlineStoreScreen}
      />

      {/*service stack */}

      {/*chat  area*/}
      <Stack.Screen
        name="ChatService"
        options={({route}) => ({
          header: props => (
            <PersonBar
              {...props}
              title={`Khan Hospital`}
              subTitle={`2 minutes ago`}
              source={`https://media.istockphoto.com/photos/large-modern-building-with-blue-letter-h-sign-for-hospital-
              picture-id1240772668?b=1&k=20&m=1240772668&s=170667a&w=0&h=fBVaxHKgl7-EQsik0B6MF9vG-FSRMrlLpyxoP5lIRtM=`}
              previous={true}
            />
          ),
        })}
        component={ChatScreen}
      />
      {/*chat area */}

      {/*map stack */}
      {/* <Stack.Screen
        name="MapScreen"
        options={({route}) => ({
          header: props => (
            <AuthBar
              {...props}
              title={`View Map`}
              back={true}
              previous
              titleStyle={{
                fontSize: 20,
                fontWeight: 'bold',
                color: theme.colors.black,
              }}
              headerStyles={{backgroundColor: theme.colors.text, elevation: 0}}
            />
          ),
        })}
        component={MapComponent}
      /> */}
      {/*map stack */}
    </Stack.Navigator>
  );
};
//menu main statck

//menulist stack
const MenuServicestack = () => {
  return (
    <Stack.Navigator initialRouteName="Hospitals">
      <Stack.Screen
        name="Hospitals"
        options={{
          header: props => (
            <SearchAppBar
              {...props}
              placeholder={`search for hospitals`}
              previous={true}
            />
          ),
        }}
        component={MenuServices}
      />
      <Stack.Screen
        name="Doctors"
        options={{
          header: props => (
            <SearchAppBar
              {...props}
              placeholder={`search for Doctors`}
              previous={true}
            />
          ),
        }}
        component={MenuServices}
      />
      <Stack.Screen
        name="Pharmacies"
        options={{
          header: props => (
            <SearchAppBar
              {...props}
              placeholder={`search for Pharmaciess`}
              previous={true}
            />
          ),
        }}
        component={MenuServices}
      />
      <Stack.Screen
        name="Nurses"
        options={{
          header: props => (
            <SearchAppBar
              {...props}
              placeholder={`search for nurses`}
              previous={true}
            />
          ),
        }}
        component={MenuServices}
      />
      <Stack.Screen
        name="Clinics"
        options={{
          header: props => (
            <SearchAppBar
              {...props}
              placeholder={`search for clinics`}
              previous={true}
            />
          ),
        }}
        component={MenuServices}
      />
    </Stack.Navigator>
  );
};
//menulist stack

//Each service
const EachServicestack = () => {
  return (
    <Stack.Navigator initialRouteName="Hospitals">
      <Stack.Screen
        name="OnlineStore"
        options={{
          header: props => (
            <SearchAppBar
              {...props}
              placeholder={`search for drugs`}
              previous={true}
            />
          ),
        }}
        component={MenuServices}
      />
      <Stack.Screen
        name="Doctors"
        options={{
          header: props => (
            <SearchAppBar
              {...props}
              placeholder={`search for Doctors`}
              previous={true}
            />
          ),
        }}
        component={MenuServices}
      />
    </Stack.Navigator>
  );
};

//Each service

//chat area

//chat area
