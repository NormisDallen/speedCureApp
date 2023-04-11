import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {theme} from '../../theme/theme';

const Loader = () => {
  return (
    <View style={[styles.loadingContainer, styles.horizontal]}>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
