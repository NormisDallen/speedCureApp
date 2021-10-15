import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';

import {theme} from '../../theme/theme';
import {generalstyles} from '../../general/generalstyles';

const TextComponent = ({category}: any) => {
  const onPress = () => {
    //
  };
  return (
    <View
      style={[
        generalstyles.flexStyles,
        {justifyContent: 'space-between', paddingTop: 10},
      ]}>
      <Text
        style={{
          color: `${theme.colors.black}`,
          fontSize: 22,
          fontWeight: '800',
          marginLeft: 20,
        }}>
        {category}
      </Text>
      <Pressable>
        <Text
          style={{
            color: `white`,
            fontSize: 15,
            fontWeight: '800',
            marginRight: 20,
            borderColor: 'gold',
            borderRadius: 20,
            backgroundColor: 'gold',
            padding: 6,
          }}>
          SEE ALL
        </Text>
      </Pressable>
    </View>
  );
};

export default TextComponent;

const styles = StyleSheet.create({});
