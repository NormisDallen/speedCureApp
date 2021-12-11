import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {generalstyles} from '../../general/generalstyles';
import {theme} from '../../theme/theme';

const ChatMessage = ({message, name, id}) => {
  console.log(`The message is ${JSON.stringify(message)} and name is ${name}`);
  if (message.UserName == name) {
    alert('yes');
  }
  return (
    <Pressable
      style={{
        padding: 10,
        backgroundColor:
          id === message.id ? theme.colors.black : theme.colors.primary,
        marginLeft: id === message.id ? theme.dimensions.width / 5 : 10,
        marginRight: id === message.id ? 10 : theme.dimensions.width / 5,
        borderRadius: 10,
        marginVertical: 5,
      }}>
      {/*time */}
      <View style={[generalstyles.absoluteStyles, {bottom: 1, right: 4}]}>
        <Text style={{fontSize: 9, marginBottom: 4}}>
          {message.messageTime}
        </Text>
      </View>

      {/*time */}

      <View style={[generalstyles.resideViews]}>
        <Text>{message?.messageText}</Text>
      </View>
    </Pressable>
  );
};

export default ChatMessage;

const styles = StyleSheet.create({});
function alert(arg0: string) {
  throw new Error('Function not implemented.');
}
