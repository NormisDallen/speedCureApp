import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthBar from '../../components/AppBars/AuthBar';
import {theme} from '../../theme/theme';
import MapScreen from '../../screens/MapScreens/MapScreen';
import PersonBar from '../../components/AppBars/PersonBar';
import ChatScreen from '../../screens/ChatScreen/ChatScreen';
const Stack = createNativeStackNavigator();
const ChatStack = () => {
  return (
    <Stack.Navigator initialRouteName="MapScreen">
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
    </Stack.Navigator>
  );
};

export default ChatStack;

const styles = StyleSheet.create({});
