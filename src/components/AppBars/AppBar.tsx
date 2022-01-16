import React from 'react';
import {Appbar, Badge} from 'react-native-paper';
import {StyleSheet, Pressable, Alert, View} from 'react-native';
import {theme} from '../../theme/theme';
import {AntDesignIcon} from '../Icons/Icons';
import {generalstyles} from '../../general/generalstyles';

const AppBar = ({
  navigation,
  previous,
  title,
  subTitle,
  subtitleStyle,
  titleStyle,
  barStyle,
  showCart,
}: any) => {
  return (
    <Appbar.Header dark={true} style={[barStyle]}>
      {previous ? (
        <Appbar.BackAction
          onPress={() => {
            navigation.navigate('YoHealth');
          }}
          color={`${theme.colors.primary}`}
        />
      ) : null}
      <View>
        <Appbar.Action
          icon="menu"
          size={30}
          color={theme.colors.primary}
          onPress={() => navigation.toggleDrawer()}
        />
      </View>

      <Appbar.Content
        title={title}
        titleStyle={titleStyle}
        subtitle={subTitle}
        subtitleStyle={subtitleStyle}
      />

      {/*show cart */}
      {showCart && (
        <View
          style={{
            marginRight: 10,
          }}>
          <Badge
            size={17}
            visible={true}
            style={[
              generalstyles.absoluteStyles,
              {
                right: 0,
                color: `${theme.colors.text}`,
                backgroundColor: `${theme.colors.primary}`,
                fontWeight: '500',
                fontSize: 10,
                zIndex: 20,
              },
            ]}>
            {0}
          </Badge>
          <Pressable
            onPress={() =>
              navigation.navigate('DrugStore', {name: 'Drug Store'})
            }>
            <AntDesignIcon
              name={'shoppingcart'}
              size={40}
              color={theme.colors.black}
            />
          </Pressable>
        </View>
      )}
      {/*show cart */}
    </Appbar.Header>
  );
};

export default AppBar;
