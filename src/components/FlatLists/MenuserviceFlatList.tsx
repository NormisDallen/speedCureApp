import React from 'react';
import {StyleSheet, Text, View, FlatList, Pressable, Image} from 'react-native';
import {theme} from '../../theme/theme';
import {Card, Title, Paragraph, Badge} from 'react-native-paper';
import {generalstyles} from '../../general/generalstyles';
import ButtonComponent from '../Buttons/Button';
import {
  AntDesignIcon,
  Evil,
  FontAwesomeIcon,
  Material,
  OctIcon,
} from '../Icons/Icons';

const fakeData = [
  {
    id: 1,
    image:
      'https://media.istockphoto.com/photos/large-modern-building-with-blue-letter-h-sign-for-hospital-picture-id1240772668?b=1&k=20&m=1240772668&s=170667a&w=0&h=fBVaxHKgl7-EQsik0B6MF9vG-FSRMrlLpyxoP5lIRtM=',
    description: 'We are located in ntinda opposite lavanda hotel',
    distance: '2km away',
    name: 'Kawempe',
  },
  {
    id: 2,
    image:
      'https://media.istockphoto.com/photos/large-modern-building-with-blue-letter-h-sign-for-hospital-picture-id1240772668?b=1&k=20&m=1240772668&s=170667a&w=0&h=fBVaxHKgl7-EQsik0B6MF9vG-FSRMrlLpyxoP5lIRtM=',
    description: 'We are located in ntinda opposite lavanda hotel',
    distance: '2km away',
    name: 'Gayaza',
  },
  {
    id: 3,
    image:
      'https://media.istockphoto.com/photos/large-modern-building-with-blue-letter-h-sign-for-hospital-picture-id1240772668?b=1&k=20&m=1240772668&s=170667a&w=0&h=fBVaxHKgl7-EQsik0B6MF9vG-FSRMrlLpyxoP5lIRtM=',
    description: 'We are located in ntinda opposite lavanda hotel',
    distance: '2km away',
    name: 'Gayaza',
  },
  {
    id: 4,
    image:
      'https://media.istockphoto.com/photos/large-modern-building-with-blue-letter-h-sign-for-hospital-picture-id1240772668?b=1&k=20&m=1240772668&s=170667a&w=0&h=fBVaxHKgl7-EQsik0B6MF9vG-FSRMrlLpyxoP5lIRtM=',
    description: 'We are located in ntinda opposite lavanda hotel',
    distance: '2km away',
    name: 'Kawala',
  },
];

const MenuserviceFlatList = () => {
  return (
    <FlatList
      data={fakeData}
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
              <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
              {/*image*/}
              <Card.Content>
                {/*details */}
                <View
                  style={[
                    generalstyles.flexStyles,
                    {justifyContent: 'space-between', alignItems: 'center'},
                  ]}>
                  <Title style={styles.paragraphStyle}>{item.name}</Title>
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
                  />
                </View>
                {/*more details */}
                <Paragraph style={styles.paragraphStyle}>
                  {item.description}
                </Paragraph>
                <View style={[generalstyles.flexStyles]}>
                  <Evil
                    name="location"
                    size={26}
                    color={theme.colors.primary}
                  />
                  <Text style={{color: theme.colors.placeholder}}>
                    {`Kawempe ${item.distance} `}
                  </Text>
                </View>
                <View style={[generalstyles.flexStyles]}>
                  {Array(5)
                    ?.fill(3)
                    .map((_, index) => (
                      <AntDesignIcon
                        key={index}
                        name="star"
                        size={22}
                        color={theme.colors.primary}
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
                  <Text style={{color: theme.colors.placeholder}}>24/7</Text>
                </View>
                {/*working hours */}
                {/*host languages */}
                <View style={[generalstyles.flexStyles]}>
                  <FontAwesomeIcon
                    name="language"
                    size={24}
                    color={theme.colors.primary}
                  />
                  <Text style={{color: theme.colors.placeholder}}>
                    English , Luganda, Swahili
                  </Text>
                </View>
                {/*host languages */}

                <View style={[generalstyles.flexStyles]}>
                  <Material
                    name="payment"
                    size={21}
                    color={theme.colors.primary}
                  />
                  <Text style={{color: theme.colors.placeholder}}>
                    Paypal Credit ,Card ,Mobile Money
                  </Text>
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

const styles = StyleSheet.create({
  paragraphStyle: {
    color: theme.colors.placeholder,
  },
});
