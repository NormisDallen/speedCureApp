import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
} from 'react-native';
import {generalstyles} from '../../general/generalstyles';
import {theme} from '../../theme/theme';
import {MaterialCommunityIcon} from '../Icons/Icons';
import {_Number, StatusImages, StatusInterface} from '../../types/types';

const StatusComponent = ({images, showViews, imageStyles}: StatusInterface) => {
  // const Images = [
  //     'https://traveltourism.news/wp-content/uploads/2017/07/Travel-tourism-1.jpg',
  //     'https://cdn01.buxtonco.com/news/2661/istock-665028882__large.jpg',
  //     'https://static.toiimg.com/thumb/76006166/Spain-tourists.jpg?width=1200&height=900',
  // ]
  const [status, setCompanyStatus] = useState(
    'we are live in lira everythin is ok',
  );

  //navigation
  const navigation = useNavigation();

  return (
    <ScrollView
      horizontal
      style={styles.containerStyles}
      showsHorizontalScrollIndicator={false}>
      {images?.map((item: StatusImages, index: _Number) => {
        //console.log(`The item is ${JSON.stringify(item.image)}`);
        return (
          <View key={index}>
            <Pressable
              style={{
                borderRadius: 10,
                marginHorizontal: 2,
                marginVertical: 5,
                width:
                  images?.length == 1
                    ? theme.dimensions.width
                    : images.length == 2
                    ? theme.dimensions.width / 2
                    : theme.dimensions.width / 3,
              }}>
              {/*dots */}
              <View style={[generalstyles.absoluteStyles, {top: 8, right: 8}]}>
                <MaterialCommunityIcon
                  name="dots-vertical"
                  size={20}
                  color={theme.colors.text}
                />
              </View>
              {/*dots */}
              {/*status text */}
              <View style={[generalstyles.absoluteStyles, {bottom: 2}]}>
                <View
                  style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                    margin: 2,
                    width: '100%',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: `${theme.colors.text}`,
                      fontWeight: '500',
                      fontSize: 13,
                    }}>
                    {item.word}
                  </Text>
                </View>
                {showViews && (
                  <View
                    style={{
                      alignItems: 'center',
                      flexDirection: 'row',
                      margin: 2,
                      width: '100%',
                    }}>
                    <Text
                      style={{
                        color: `${theme.colors.text}`,
                        fontWeight: '500',
                        fontSize: 13,
                      }}>
                      {10} views
                    </Text>
                  </View>
                )}
              </View>

              {/*status text */}
              {/*views */}

              {/*views */}
              <Image
                style={[
                  {
                    width: '100%',
                    height: 172,
                    borderRadius: 10,
                    opacity: 0.6,
                    borderWidth: 0,
                    backgroundColor: `${theme.colors.black}`,
                  },
                ]}
                //   source={{
                //     uri: item.image,
                //   }}
                source={require('../../assets/appstore.png')}
                resizeMode="cover"
              />
            </Pressable>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default StatusComponent;

const styles = StyleSheet.create({
  containerStyles: {
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 0,
    padding: 5,
    borderWidth: 0,
  },
});
