import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FloatingButton from '../../components/Buttons/FloatingButton';
import MenuserviceFlatList from '../../components/FlatLists/MenuserviceFlatList';
import Loader from '../../components/Loaders/Loader';
import {generalstyles} from '../../general/generalstyles';
import {theme} from '../../theme/theme';

//avaible hospitals
//nurses

const MenuServices = ({route}) => {
  //console.log(`The route data is ${JSON.stringify(route.params.data)}`);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <View
      style={[generalstyles.container, {backgroundColor: theme.colors.text}]}>
      {loading ? (
        <View
          style={[
            generalstyles.absoluteStyles,
            {
              top: theme.dimensions.height / 3,
              left: theme.dimensions.width / 2,
            },
          ]}>
          <Loader />
        </View>
      ) : (
        <View>
          <FloatingButton
            icon="plus"
            accessibilityLabel="post"
            styles={[
              generalstyles.absoluteStyles,
              {right: theme.dimensions.width / 3, bottom: 10},
            ]}
            src="https://cdn-icons-png.flaticon.com/512/535/535239.png"
            label="Nearest"
          />
          <MenuserviceFlatList service={route?.params?.data} />
        </View>
      )}
    </View>
  );
};

export default MenuServices;

const styles = StyleSheet.create({});
