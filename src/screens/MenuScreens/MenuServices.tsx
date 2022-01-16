import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FloatingButton from '../../components/Buttons/FloatingButton';
import MenuserviceFlatList from '../../components/FlatLists/MenuserviceFlatList';
import Loader from '../../components/Loaders/Loader';
import {generalstyles} from '../../general/generalstyles';
import {theme} from '../../theme/theme';
import {SpeedDial} from 'react-native-elements';

const MenuServices = ({route}) => {
  const [open, setOpen] = useState(false);
  //use navigation
  const navigation = useNavigation<any>();
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
        <View style={{paddingBottom: 10}}>
          <SpeedDial
            style={[generalstyles.absoluteStyles, {bottom: 10, right: 10}]}
            isOpen={open}
            icon={{
              name: 'more',
              color: theme.colors.text,
              style: {fontSize: 30},
            }}
            openIcon={{name: 'close', color: theme.colors.text}}
            color={theme.colors.primary}
            size="large"
            onOpen={() => setOpen(!open)}
            onClose={() => setOpen(!open)}>
            <SpeedDial.Action
              icon={{
                name: 'sc-telegram',
                type: 'evilicon',
                color: theme.colors.text,
              }}
              title="View All"
              color={theme.colors.primary}
              onPress={() =>
                navigation.navigate('MapStack', {
                  screen: 'MapScreen',
                  params: {
                    data: route?.params?.data,
                    name: 'Hospitals',
                  },
                })
              }
            />
            <SpeedDial.Action
              icon={{name: 'map', color: theme.colors.text}}
              title="View Map"
              color={theme.colors.primary}
              onPress={() =>
                navigation.navigate('MapStack', {
                  data: route?.params?.data,
                  name: route?.params?.name,
                })
              }
            />
          </SpeedDial>

          <MenuserviceFlatList service={route?.params?.data} />
        </View>
      )}
    </View>
  );
};

export default MenuServices;

{
  /* <FloatingButton
            icon="plus"
            accessibilityLabel="post"
            styles={[
              generalstyles.absoluteStyles,
              {right: theme.dimensions.width / 3, bottom: 10},
            ]}
            src="https://cdn-icons-png.flaticon.com/512/535/535239.png"
            label="Map"
            onPress={() => navigation.navigate('MapStack')}
          /> */
}
