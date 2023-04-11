import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FAB} from 'react-native-paper';
import {theme} from '../../theme/theme';

const FloatingButton = ({
  styles,
  label,
  icon,
  onPress,
  accessbililty,
  src,
}: any) => {
  //generalstyles.absoluteStyles, {right: 10, bottom: 10}
  //() => navigation.navigate('PostScreen')
  return (
    <FAB
      style={styles}
      icon={{
        source: {
          uri: src,
        },
        direction: 'rtl',
      }}
      uppercase={false}
      accessibilityLabel={accessbililty ? accessbililty : 'label'}
      label={label ? label : null}
      animated={true}
      color={theme.colors.primary}
      theme={{
        colors: {
          accent: theme.colors.text,
        },
      }}
      onPress={onPress}
    />
  );
};

export default FloatingButton;

const styles = StyleSheet.create({});
