import React, {useState} from 'react';
import {generalstyles} from '../../general/generalstyles';
import {theme} from '../../theme/theme';
import {EntypoIcons, IonIcon, MaterialCommunityIcon} from '../Icons/Icons';
import {StyleSheet, Text, View, TextInput, Pressable} from 'react-native';

// import { EntypoIcon, IonIcon, MaterialCommunityIcon } from '../Icons/Icons'

const InputBox = () => {
  const [message, SetMessage] = useState('');

  const sendMessage = () => {
    alert(message);
    SetMessage('');
  };
  return (
    <View style={[generalstyles.flexStyles, styles.container]}>
      <View style={{flex: 0.9, marginRight: 5}}>
        <View style={[generalstyles.flexStyles, styles.mainContainer]}>
          <Pressable style={{marginLeft: 2}}>
            <EntypoIcons
              name="emoji-happy"
              size={24}
              color={theme.colors.placeholder}
            />
          </Pressable>

          <View style={{flex: 1, alignItems: 'flex-start'}}>
            <TextInput
              style={{
                marginLeft: 10,
              }}
              multiline
              value={message}
              placeholder={`Type a message`}
              onChangeText={text => SetMessage(text)}
              onSubmitEditing={sendMessage}
            />
          </View>
          <Pressable>
            <EntypoIcons
              name="attachment"
              size={24}
              color={theme.colors.placeholder}
            />
          </Pressable>
          {/*dispear camera on type message */}
          {!message && (
            <Pressable
              style={{alignItems: 'flex-end', marginLeft: 20, marginRight: 1}}>
              <EntypoIcons
                name="camera"
                size={24}
                color={theme.colors.placeholder}
              />
            </Pressable>
          )}
          {/*disappear on type message */}
        </View>
      </View>
      <View style={{flex: 0.1, marginRight: 14}}>
        {/*show send */}
        {!message ? (
          <Pressable style={styles.buttonContainer}>
            <MaterialCommunityIcon
              name="microphone"
              size={24}
              color={theme.colors.primary}
            />
          </Pressable>
        ) : (
          <Pressable style={styles.buttonContainer} onPress={sendMessage}>
            <IonIcon name="send-sharp" size={24} color={theme.colors.primary} />
          </Pressable>
        )}
        {/*show send */}
      </View>
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  mainContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: `${theme.colors.secondary}`,
    borderRadius: 50,
    width: 50,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function alert(message: string) {
  throw new Error('Function not implemented.');
}
