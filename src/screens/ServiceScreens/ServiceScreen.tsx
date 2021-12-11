import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
  FlatList,
} from 'react-native';
import AvatarComponent from '../../components/Avatar/Avatar';
import FloatingButton from '../../components/Buttons/FloatingButton';
import MenuList from '../../components/FlatLists/MenuList';
import {
  AntDesignIcon,
  Evil,
  FontAwesomeIcon,
  Material,
  OctIcon,
} from '../../components/Icons/Icons';
import {generalstyles} from '../../general/generalstyles';
import {theme} from '../../theme/theme';

//fake components

//fake componets
const menu = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1517120026326-d87759a7b63b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvc3BpdGFsc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    serviceName: 'Online Shop',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9jdG9yc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    serviceName: 'Counselling',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1580281657527-47f249e8f4df?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhhcm1hY3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    serviceName: 'Blood Tests',
  },
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bnVyc2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    serviceName: 'X-rays',
  },
];

const ServiceScreen = () => {
  const [service, setService] = useState<string[]>([
    'English',
    'Luganda',
    'Swahili',
  ]);

  const [payment, setPayment] = useState<String[]>([
    'Paypal',
    'Visa',
    'Card',
    'Mobile Money',
  ]);

  return (
    <View style={[generalstyles.background, generalstyles.container]}>
      {/*services provided */}
      <FloatingButton
        accessibilityLabel="post"
        styles={[
          generalstyles.absoluteStyles,
          {right: theme.dimensions.width / 3, bottom: 10},
        ]}
        src="https://cdn-icons.flaticon.com/png/512/1865/premium/1865153.png?token=exp=1639189798~hmac=0b6fce785fdd4003135c4223c960cf3e"
        label="Map"
      />
      <FlatList
        data={menu}
        keyExtractor={item => item.image}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={[styles.cardStyle]}>
            <View>
              {/*first view */}
              <View
                style={[
                  generalstyles.flexStyles,
                  {paddingHorizontal: 10, paddingBottom: 10},
                ]}>
                <AvatarComponent
                  size={45}
                  source={
                    'https://media.istockphoto.com/photos/large-modern-building-with-blue-letter-h-sign-for-hospital-picture-id1240772668?b=1&k=20&m=1240772668&s=170667a&w=0&h=fBVaxHKgl7-EQsik0B6MF9vG-FSRMrlLpyxoP5lIRtM='
                  }
                />
                <View style={[{marginLeft: 10}]}>
                  <View>
                    <Text>We provide the best services </Text>
                  </View>

                  <View style={[generalstyles.flexStyles, {marginLeft: -5}]}>
                    <Evil name="location" size={26} color={theme.colors.text} />
                    <Text>Muyenga kasanga 4km away</Text>
                  </View>
                </View>
              </View>
              {/*first view */}
              <View style={[{marginLeft: 15, paddingBottom: 10}]}>
                {/*working works */}
                <View style={[generalstyles.flexStyles]}>
                  <View style={[{marginRight: 5}]}>
                    <Text style={{color: theme.colors.text}}>
                      Working Hours
                    </Text>
                  </View>

                  <OctIcon name="watch" size={21} color={theme.colors.text} />
                  <Text> 24/7</Text>
                </View>
                {/*working works */}
                {/*method of payment */}
                <View style={[generalstyles.flexStyles]}>
                  <View style={[{marginRight: 5}]}>
                    <Text style={{color: theme.colors.text}}>
                      Languages Used
                    </Text>
                  </View>
                  <FontAwesomeIcon
                    name="language"
                    size={24}
                    color={theme.colors.text}
                  />
                  <View style={[generalstyles.flexStyles]}>
                    {service.map((lang, index) => (
                      <Text key={index}>
                        {' '}
                        {lang}
                        {`${
                          index + 1 !== service.length ? `${' | '}` : `${''}`
                        }`}
                      </Text>
                    ))}
                  </View>
                </View>
                {/*method of payment */}
                <View style={[generalstyles.flexStyles, {marginRight: 10}]}>
                  <View style={[{marginRight: 5}]}>
                    <Text style={{color: theme.colors.text}}>
                      Payment Methods
                    </Text>
                  </View>
                  <Material
                    name="payment"
                    size={21}
                    color={theme.colors.text}
                  />
                  <View style={[{width: '60%'}]}>
                    <Text>
                      {payment.map((option, index) => (
                        <>
                          {' '}
                          {option}
                          {`${
                            index + 1 !== payment.length ? `${' | '}` : `${''}`
                          }`}
                        </>
                      ))}
                    </Text>
                  </View>
                </View>
                {/*method of payment */}

                {/*rating */}
                <View
                  style={[
                    generalstyles.flexStyles,
                    generalstyles.paragraphStyle,
                  ]}>
                  <View style={[{marginRight: 5}]}>
                    <Text style={{color: theme.colors.text}}>Rating</Text>
                  </View>
                  {Array(5)
                    ?.fill(5)
                    .map((_, index) => (
                      <AntDesignIcon
                        key={index}
                        name="star"
                        size={22}
                        color={theme.colors.yellow}
                      />
                    ))}
                </View>
                {/*rating */}
              </View>
            </View>
          </View>
        }
        renderItem={({item, index}) => {
          return (
            <Pressable style={[styles.pressableStyles, {}]}>
              <Image source={{uri: item.image}} style={[styles.imageStyles]} />
              {/*menu words*/}
              <View style={[{marginVertical: 5, marginHorizontal: 5}]}>
                <View
                  style={[
                    generalstyles.resideViews,
                    generalstyles.centerContent,
                  ]}>
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
          );
        }}
      />
      {/*services provided */}
    </View>
  );
};

export default ServiceScreen;

const styles = StyleSheet.create({
  cardStyle: {
    width: theme.dimensions.width,
    backgroundColor: theme.colors.primary,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    marginBottom: 10,
  },
  pressableStyles: {
    width: theme.dimensions.width / 2.4,
    height: 150,
    borderRadius: 10,
    margin: 10,
  },
  imageStyles: {
    width: theme.dimensions.width / 2.2,
    height: 125,
    borderRadius: 10,
  },
});
