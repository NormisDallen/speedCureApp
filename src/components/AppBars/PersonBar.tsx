import React from 'react';
import {Appbar, Badge} from 'react-native-paper';
import {View, StyleSheet, Pressable} from 'react-native';
import {theme} from '../../theme/theme';
import AvatarComponent from '../Avatar/Avatar';

const PersonBar = ({navigation, previous, title, source, subTitle}) => {
  const unread = 4;

  return (
    <Appbar.Header
      dark={true}
      style={{
        backgroundColor: `${theme.colors.primary}`,
        width: '100%',
        elevation: 10,
      }}>
      {previous ? (
        <Appbar.BackAction
          onPress={navigation.goBack}
          color={`${theme.colors.text}`}
        />
      ) : null}

      {/*avatar */}
      <View>
        <AvatarComponent size={40} source={source} />
      </View>
      {/*avatar */}

      <Appbar.Content
        title={title}
        titleStyle={styles.titleStyle}
        subtitle={subTitle}
        subtitleStyle={styles.subtitleStyle}
      />
      <Appbar.Action
        icon="dots-vertical"
        onPress={() => console.log('Pressed delete')}
        color={theme.colors.black}
      />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  appHeaderStyle: {
    backgroundColor: `${theme.colors.primary}`,
    width: '100%',
  },

  titleStyle: {
    marginTop: -10,
    color: `${theme.colors.text}`,
    marginLeft: -10,
  },
  subtitleStyle: {
    color: `${theme.colors.disabled}`,
    marginLeft: -10,
  },
});
export default PersonBar;
