import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MenuserviceFlatList from '../../components/FlatLists/MenuserviceFlatList';
import {generalstyles} from '../../general/generalstyles';
import {theme} from '../../theme/theme';

//avaible hospitals
//nurses

const MenuServices = ({route}) => {
  return (
    <View
      style={[
        generalstyles.container,
        {backgroundColor: theme.colors.whitesmoke},
      ]}>
      <MenuserviceFlatList />
    </View>
  );
};

export default MenuServices;

const styles = StyleSheet.create({});
