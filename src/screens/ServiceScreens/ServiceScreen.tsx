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
import {
  AntDesignIcon,
  Evil,
  FontAwesomeIcon,
  Material,
  OctIcon,
} from '../../components/Icons/Icons';
import {generalstyles} from '../../general/generalstyles';
import {theme} from '../../theme/theme';
//FAB group

import {SpeedDial} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

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
  {
    id: 5,
    image:
      'https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bnVyc2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    serviceName: 'Surgery',
  },
  {
    id: 6,
    image:
      'https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bnVyc2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    serviceName: 'Dental Care',
  },
  {
    id: 7,
    image:
      'https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bnVyc2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    serviceName: 'Family Planning',
  },
  {
    id: 8,
    image:
      'https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bnVyc2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    serviceName: 'Mid wivery',
  },
  {
    id: 9,
    image:
      'https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bnVyc2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    serviceName: 'Optics',
  },
  {
    id: 10,
    image:
      'https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bnVyc2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    serviceName: 'Available Jobs',
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
  //use navigation

  const [open, setOpen] = useState(false);

  //navigation
  const navigation = useNavigation<any>();

  return (
    <View style={[generalstyles.background, generalstyles.container]}>
      {/*floating button */}
      <SpeedDial
        style={[generalstyles.absoluteStyles, {bottom: 10, right: 10}]}
        isOpen={open}
        icon={{name: 'more', color: '#fff'}}
        openIcon={{name: 'close', color: '#fff'}}
        color={theme.colors.primary}
        onOpen={() => setOpen(!open)}
        onClose={() => setOpen(!open)}>
        <SpeedDial.Action
          icon={{name: 'chat', color: '#fff'}}
          title="Chat"
          color={theme.colors.primary}
          onPress={() => navigation.navigate('Chat')}
        />
        <SpeedDial.Action
          icon={{name: 'map', color: '#fff'}}
          title="Map"
          color={theme.colors.primary}
          onPress={() => console.log('Delete Something')}
        />
      </SpeedDial>

      {/*flooting button */}

      <FlatList
        data={menu}
        keyExtractor={item => item.image}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
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
            <Pressable
              style={[styles.pressableStyles]}
              key={index}
              onPress={() => navigation.navigate('EachService')}>
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
      {/*services */}

      {/*services */}
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
    width: theme.dimensions.width / 4,
    height: 100,
    borderRadius: 10,
    margin: 10,
  },
  imageStyles: {
    width: theme.dimensions.width / 4,
    height: 95,
    borderRadius: 10,
  },
});
