import React, {useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {
  Drawer,
  Text,
  Caption,
  Paragraph,
  TouchableRipple,
  Switch,
  Title,
} from 'react-native-paper';
import {generalstyles} from '../../general/generalstyles';
import {IonIcon, MaterialCommunityIcon} from '../Icons/Icons';
import AvatarComponent from '../Avatar/Avatar';
import {useNavigation} from '@react-navigation/native';
import {theme} from '../../theme/theme';

const DrawerContentComponent = (props: any) => {
  const navigation = useNavigation<any>();
  //toggle switch
  const toggleSwitch = () => {
    setDarkTheme(!darkTheme);
  };
  //toggle switch

  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <View style={[generalstyles.container]}>
      <DrawerContentScrollView {...props}>
        {/*user info */}
        <View style={[styles.draweContent]}>
          <View style={[styles.userInfoSection]}>
            <View
              style={[
                generalstyles.flexStyles,
                {marginTop: 15, justifyContent: 'space-evenly'},
              ]}>
              <AvatarComponent size={50} source={'https://picsum.photos/700'} />
              <View>
                <Title style={styles.title}>Katende Nicholas</Title>
                <Caption style={styles.caption}>katznicho@gmail.com</Caption>
              </View>
            </View>
            {/*some info */}
            {/*some info */}
          </View>
          {/*user info */}

          {/*drawer items */}
          <Drawer.Section style={[styles.drawerSection]}>
            <Drawer.Item
              label="Home"
              icon={({color, size}) => (
                <MaterialCommunityIcon
                  name="home-outline"
                  size={size}
                  color={color}
                />
                
              )}
              onPress={() => navigation?.navigate('HomeTab')}
            />
            <Drawer.Item
              label="Profile"
              icon={({color, size}) => (
                <MaterialCommunityIcon
                  name="account-outline"
                  size={size}
                  color={color}
                />
              )}
              onPress={() => Alert.alert('sign out')}
            />
            <Drawer.Item
              label="Settings"
              icon={({color, size}) => (
                <IonIcon name="settings-outline" size={size} color={color} />
              )}
              onPress={() => Alert.alert('sign out')}
            />
            <Drawer.Item
              label="Help"
              icon={({color, size}) => (
                <MaterialCommunityIcon
                  name="account-check-outline"
                  size={size}
                  color={color}
                />
              )}
              onPress={() => Alert.alert('sign out')}
            />
          </Drawer.Section>
          <Drawer.Section title="Preferences">
            <TouchableRipple onPress={toggleSwitch}>
              <View style={styles.preference}>
                <Text>{darkTheme ? 'Dark theme' : 'Light theme'}</Text>
                <View>
                  <Switch
                    value={darkTheme}
                    color={theme.colors.black}
                    onValueChange={toggleSwitch}
                  />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={[styles.bottomDrawerSection]}>
        <Drawer.Item
          label="Sign Out"
          icon={({color, size}) => (
            <MaterialCommunityIcon
              name="exit-to-app"
              size={size}
              color={color}
            />
          )}
          onPress={() => Alert.alert('sign out')}
        />
      </Drawer.Section>
    </View>
  );
};

export default DrawerContentComponent;

const styles = StyleSheet.create({
  draweContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 0,
    marginLeft: -14,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },

  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
