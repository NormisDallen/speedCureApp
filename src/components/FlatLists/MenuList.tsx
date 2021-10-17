import React from 'react';
import {StyleSheet, Text, View, FlatList, Pressable, Image} from 'react-native';
import {theme} from '../../theme/theme';
import {generalstyles} from '../../general/generalstyles';
import {MenuInterface} from '../../types/types';
import {useNavigation} from '@react-navigation/native';

const MenuList = ({menu}: MenuInterface) => {
  const navigation = useNavigation<any>();
  return (
    <FlatList
      data={menu}
      keyExtractor={item => item.image}
      contentContainerStyle={{
        margin: 10,
      }}
      numColumns={2}
      renderItem={({item, index}) => (
        <Pressable
          style={[styles.pressableStyles]}
          onPress={() => navigation.navigate('Hospitals')}>
          <Image source={{uri: item.image}} style={[styles.imageStyles]} />
          {/*menu words*/}
          <View style={[{marginVertical: 5, marginHorizontal: 5}]}>
            <View
              style={[generalstyles.resideViews, generalstyles.centerContent]}>
              <Text
                style={{
                  color: `${theme.colors.primary}`,
                  fontWeight: '500',
                  fontSize: 12,
                }}>
                {item.serviceName}
              </Text>
            </View>
          </View>
          {/*menu words */}
        </Pressable>
      )}
    />
  );
};

export default MenuList;

const styles = StyleSheet.create({
  pressableStyles: {
    width: theme.dimensions.width / 2.2,
    height: 150,
    borderRadius: 10,
    marginRight: 7,
    marginBottom: 15,
  },
  imageStyles: {
    width: theme.dimensions.width / 2.2,
    height: 125,
    borderRadius: 10,
  },
});
