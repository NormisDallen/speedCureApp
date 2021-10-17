import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import MenuList from '../../components/FlatLists/MenuList';
import {generalstyles} from '../../general/generalstyles';
import {theme} from '../../theme/theme';


const menuItems = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1517120026326-d87759a7b63b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvc3BpdGFsc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    serviceName: 'Hospitals',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9jdG9yc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    serviceName: 'Doctors',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1580281657527-47f249e8f4df?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhhcm1hY3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    serviceName: 'Pharmacies',
  },
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bnVyc2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    serviceName: 'Nurses',
  },
  {
    id: 5,
    image:
      'https://images.unsplash.com/photo-1580281657529-557a6abb6387?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGNsaW5pY3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    serviceName: 'Clinics',
  },
  {
    id: 6,
    image:
      'https://images.unsplash.com/photo-1619719341796-44c4d2e0eb5a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZW1lcmdlbmN5JTIwc2VydmljZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    serviceName: 'Emergency',
  },
];

const MenuScreen = () => {
  return (
    <View
      style={[
        generalstyles.container,
        {backgroundColor: theme.colors.whitesmoke},
      ]}>
      <View>
        <MenuList menu={menuItems} />
      </View>
    </View>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({});
