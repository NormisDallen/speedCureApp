import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  Image,
  Alert,
} from 'react-native';
import {theme} from '../../theme/theme';
import {Card, Title, Paragraph, Badge} from 'react-native-paper';
import {generalstyles} from '../../general/generalstyles';
import ButtonComponent from '../Buttons/Button';
import {MenuServiceInterface} from '../../types/types';
import {
  AntDesignIcon,
  Evil,
  FontAwesomeIcon,
  Material,
  OctIcon,
} from '../Icons/Icons';
import {useNavigation} from '@react-navigation/core';

const MenuserviceFlatList = ({service}) => {
  //console.log(`The serveice is ${JSON.stringify(service)}`);
  const navigation = useNavigation<any>();
  return (
    <FlatList
      data={service}
      keyExtractor={item => String(item.id)}
      showsVerticalScrollIndicator={false}
      renderItem={({item, index}) => {
        return (
          <Pressable
            key={item?.id}
            style={{
              margin: 10,
              borderRadius: 10,
            }}>
            <Card>
              {/*image */}
              <Card.Cover source={{uri: item.image}} />
              {/*image*/}
              <Card.Content>
                {/*details */}
                <View
                  style={[
                    generalstyles.flexStyles,
                    {justifyContent: 'space-between', alignItems: 'center'},
                  ]}>
                  <Title style={generalstyles.paragraphStyle}>
                    {item.name}
                  </Title>
                  <ButtonComponent
                    mode="outlined"
                    text="Services"
                    color={`${theme.colors.primary}`}
                    style={{
                      marginTop: 5,
                      borderRadius: 10,
                      borderWidth: 2,
                      borderColor: theme.colors.primary,
                      height: 40,
                    }}
                    contentStyle={{
                      fontSize: 8,
                      height: 35,
                    }}
                    onPress={() =>
                      navigation.navigate('hospitals', {screen: 'Hospital'})
                    }
                  />
                </View>
                {/*more details */}
                <Paragraph style={generalstyles.paragraphStyle}>
                  {item.description}
                </Paragraph>
                <View style={[generalstyles.flexStyles, {marginLeft: -5}]}>
                  <Evil
                    name="location"
                    size={26}
                    color={theme.colors.primary}
                  />
                  <Text style={generalstyles.paragraphStyle}>
                    {`${item?.location} ${
                      item?.distance ? item.distance : ''
                    } `}
                  </Text>
                </View>
                <View
                  style={[
                    generalstyles.flexStyles,
                    generalstyles.paragraphStyle,
                  ]}>
                  {Array(item.rating)
                    ?.fill(item.rating)
                    .map((_, index) => (
                      <AntDesignIcon
                        key={index}
                        name="star"
                        size={22}
                        color={theme.colors.yellow}
                      />
                    ))}
                </View>
                {/*working hours */}
                <View style={[generalstyles.flexStyles]}>
                  <OctIcon
                    name="watch"
                    size={21}
                    color={theme.colors.primary}
                  />
                  <Text style={generalstyles.paragraphStyle}>
                    {' '}
                    {item.workingTime}
                  </Text>
                </View>
                {/*working hours */}
                {/*host languages */}
                <View style={[generalstyles.flexStyles]}>
                  <FontAwesomeIcon
                    name="language"
                    size={24}
                    color={theme.colors.primary}
                  />
                  {item?.languages.map((lang, index) => (
                    <Text style={{color: theme.colors.placeholder}} key={index}>
                      {' '}
                      {lang}
                      {`${
                        index + 1 !== item.languages.length
                          ? `${' | '}`
                          : `${''}`
                      }`}
                    </Text>
                  ))}
                </View>
                {/*host languages */}

                <View style={[generalstyles.flexStyles]}>
                  <Material
                    name="payment"
                    size={21}
                    color={theme.colors.primary}
                  />
                  {item?.paymentOptions.map((option, index) => (
                    <Text style={generalstyles.paragraphStyle} key={index}>
                      {' '}
                      {option}
                      {`${
                        index + 1 !== item.paymentOptions.length
                          ? `${' | '}`
                          : `${''}`
                      }`}
                    </Text>
                  ))}
                </View>
                <View></View>
              </Card.Content>
            </Card>
          </Pressable>
        );
      }}
    />
  );
};

export default MenuserviceFlatList;
