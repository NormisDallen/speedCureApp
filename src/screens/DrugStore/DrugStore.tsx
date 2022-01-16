import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import {generalstyles} from '../../general/generalstyles';
import {theme} from '../../theme/theme';
import {SliderBox} from 'react-native-image-slider-box';
import TextComponent from '../../components/TextComponent/Text';
import BannerAdvert from '../../components/AdMob/BannerAd';

const categories = [
  {
    category: [
      {
        image:
          'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZG9jdG9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        name: 'drugs',
      },
      {
        image:
          'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZG9jdG9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        name: 'drugs',
      },
      {
        image:
          'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZG9jdG9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        name: 'drugs',
      },
      {
        image:
          'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZG9jdG9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        name: 'drugs',
      },
    ],
  },
  {
    category: [
      {
        image:
          'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZG9jdG9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        name: 'drugs',
      },
      {
        image:
          'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZG9jdG9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        name: 'drugs',
      },
      {
        image:
          'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZG9jdG9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        name: 'drugs',
      },
      {
        image:
          'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZG9jdG9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        name: 'drugs',
      },
    ],
  },
];

const images = [
  'https://images.unsplash.com/photo-1580377968242-daed42865732?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGRydWclMjBpbWFnZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  'https://source.unsplash.com/1024x768/?water',
  'https://source.unsplash.com/1024x768/?girl',
  'https://source.unsplash.com/1024x768/?tree', // Network image
];

const DrugStoreScreen = () => {
  return (
    <ScrollView
      style={[generalstyles.container, generalstyles.background]}
      showsVerticalScrollIndicator={false}>
      {/*carousel */}

      <View>
        <SliderBox
          images={images}
          sliderBoxHeight={150}
          dotColor={theme.colors.text}
          inactiveDotColor={theme.colors.placeholder}
          autoplay
          ImageComponentStyle={{borderRadius: 15, width: '95%', marginTop: 5}}
          imageLoadingColor={theme.colors.text}
          resizeMethod={'resize'}
          resizeMode={'cover'}
          paginationBoxVerticalPadding={10}
          circleLoop
        />
      </View>

      {/*coursel */}

      {/*banner */}
      <View style={{marginVertical: 10}}>
        <BannerAdvert />
      </View>
      {/*banner */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View>
          <View style={[generalstyles.viewStyle, {marginVertical: 10}]} />
          <View style={[generalstyles.centerContent]}>
            <Text style={{color: theme.colors.primary}}>Categories</Text>
          </View>
          {categories.map((category, index) => {
            return (
              <View
                key={index}
                style={[
                  generalstyles.flexStyles,
                  {justifyContent: 'space-evenly'},
                ]}>
                {category.category.map((cat, index) => (
                  <Pressable
                    key={index}
                    style={{
                      width: theme.dimensions.width / 4,
                      marginHorizontal: 5,
                      marginVertical: 10,
                    }}>
                    <View>
                      <Image
                        source={{uri: cat.image}}
                        resizeMode="cover"
                        style={{
                          height: 100,
                          width: theme.dimensions.width / 4,
                          borderRadius: 10,
                        }}
                      />
                    </View>
                    <View style={[generalstyles.centerContent]}>
                      <Text style={{color: theme.colors.primary}}>
                        {cat.name}
                      </Text>
                    </View>
                  </Pressable>
                ))}
              </View>
            );
          })}
          <View style={[generalstyles.viewStyle]} />
        </View>
      </ScrollView>

      {/*banner */}
      <View>
        <BannerAdvert />
      </View>
      {/*banner */}

      {/*drugs */}
      <View>
        <View
          style={{
            backgroundColor: '#f4f4f4',
            margin: 5,
            padding: 5,
            borderRadius: 4,
          }}>
          <TextComponent category="Covid Drugs" />
          <View
            style={[
              generalstyles.flexStyles,
              {justifyContent: 'space-evenly'},
            ]}>
            <View
              style={{
                marginVertical: 10,
                marginHorizontal: 5,
                padding: 10,
              }}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1605289982774-9a6fef564df8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGRydWclMjBpbWFnZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                }}
                style={{
                  width: theme.dimensions.width / 3.4,
                  height: 150,
                }}
                resizeMode="cover"
              />
              <View style={[generalstyles.centerContent]}>
                <Text style={[{color: theme.colors.primary}]}>covid drug</Text>
              </View>
              <View style={[generalstyles.centerContent]}>
                <Text style={[{color: theme.colors.black, fontSize: 18}]}>
                  UGX 1200
                </Text>
              </View>
            </View>

            <View
              style={{
                marginVertical: 10,
                marginHorizontal: 5,
                padding: 10,
              }}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1605289982774-9a6fef564df8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGRydWclMjBpbWFnZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                }}
                style={{
                  width: theme.dimensions.width / 3.5,
                  height: 150,
                }}
                resizeMode="cover"
              />
              <View style={[generalstyles.centerContent]}>
                <Text style={[{color: theme.colors.primary}]}>covid drug</Text>
              </View>
              <View style={[generalstyles.centerContent]}>
                <Text style={[{color: theme.colors.black, fontSize: 18}]}>
                  UGX 1200
                </Text>
              </View>
            </View>

            <View
              style={{
                marginVertical: 10,
                marginHorizontal: 5,
                padding: 10,
              }}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1605289982774-9a6fef564df8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGRydWclMjBpbWFnZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                }}
                style={{
                  width: theme.dimensions.width / 3.5,
                  height: 150,
                }}
                resizeMode="cover"
              />
              <View style={[generalstyles.centerContent]}>
                <Text style={[{color: theme.colors.primary}]}>covid drug</Text>
              </View>
              <View style={[generalstyles.centerContent]}>
                <Text style={[{color: theme.colors.black, fontSize: 18}]}>
                  UGX 1200
                </Text>
              </View>
            </View>
          </View>
        </View>
        {/*here */}
        {/*banner */}
        <View>
          <BannerAdvert />
        </View>
        {/*banner */}
        <View
          style={{
            backgroundColor: '#f4f4f4',
            margin: 5,
            padding: 5,
            borderRadius: 4,
          }}>
          <TextComponent category="Covid Drugs" />
          <View
            style={[
              generalstyles.flexStyles,
              {justifyContent: 'space-evenly'},
            ]}>
            <View
              style={{
                marginVertical: 10,
                marginHorizontal: 5,
                padding: 10,
              }}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1605289982774-9a6fef564df8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGRydWclMjBpbWFnZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                }}
                style={{
                  width: theme.dimensions.width / 3.4,
                  height: 150,
                }}
                resizeMode="cover"
              />
              <View style={[generalstyles.centerContent]}>
                <Text style={[{color: theme.colors.primary}]}>covid drug</Text>
              </View>
              <View style={[generalstyles.centerContent]}>
                <Text style={[{color: theme.colors.black, fontSize: 18}]}>
                  UGX 1200
                </Text>
              </View>
            </View>

            <View
              style={{
                marginVertical: 10,
                marginHorizontal: 5,
                padding: 10,
              }}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1605289982774-9a6fef564df8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGRydWclMjBpbWFnZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                }}
                style={{
                  width: theme.dimensions.width / 3.5,
                  height: 150,
                }}
                resizeMode="cover"
              />
              <View style={[generalstyles.centerContent]}>
                <Text style={[{color: theme.colors.primary}]}>covid drug</Text>
              </View>
              <View style={[generalstyles.centerContent]}>
                <Text style={[{color: theme.colors.black, fontSize: 18}]}>
                  UGX 1200
                </Text>
              </View>
            </View>
            <View
              style={{
                marginVertical: 10,
                marginHorizontal: 5,
                padding: 10,
              }}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1605289982774-9a6fef564df8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGRydWclMjBpbWFnZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                }}
                style={{
                  width: theme.dimensions.width / 3.5,
                  height: 150,
                }}
                resizeMode="cover"
              />
              <View style={[generalstyles.centerContent]}>
                <Text style={[{color: theme.colors.primary}]}>covid drug</Text>
              </View>
              <View style={[generalstyles.centerContent]}>
                <Text style={[{color: theme.colors.black, fontSize: 18}]}>
                  UGX 1200
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/*here */}
        <View
          style={{
            backgroundColor: '#f4f4f4',
            margin: 5,
            padding: 5,
            borderRadius: 4,
          }}>
          <TextComponent category="Covid Drugs" />
          <View
            style={[
              generalstyles.flexStyles,
              {justifyContent: 'space-evenly'},
            ]}>
            <View
              style={{
                marginVertical: 10,
                marginHorizontal: 5,
                padding: 10,
              }}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1605289982774-9a6fef564df8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGRydWclMjBpbWFnZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                }}
                style={{
                  width: theme.dimensions.width / 3.4,
                  height: 150,
                }}
                resizeMode="cover"
              />
              <View style={[generalstyles.centerContent]}>
                <Text style={[{color: theme.colors.primary}]}>covid drug</Text>
              </View>
              <View style={[generalstyles.centerContent]}>
                <Text style={[{color: theme.colors.black, fontSize: 18}]}>
                  UGX 1200
                </Text>
              </View>
            </View>

            <View
              style={{
                marginVertical: 10,
                marginHorizontal: 5,
                padding: 10,
              }}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1605289982774-9a6fef564df8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGRydWclMjBpbWFnZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                }}
                style={{
                  width: theme.dimensions.width / 3.5,
                  height: 150,
                }}
                resizeMode="cover"
              />
              <View style={[generalstyles.centerContent]}>
                <Text style={[{color: theme.colors.primary}]}>covid drug</Text>
              </View>
              <View style={[generalstyles.centerContent]}>
                <Text style={[{color: theme.colors.black, fontSize: 18}]}>
                  UGX 1200
                </Text>
              </View>
            </View>
            <View
              style={{
                marginVertical: 10,
                marginHorizontal: 5,
                padding: 10,
              }}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1605289982774-9a6fef564df8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGRydWclMjBpbWFnZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                }}
                style={{
                  width: theme.dimensions.width / 3.5,
                  height: 150,
                }}
                resizeMode="cover"
              />
              <View style={[generalstyles.centerContent]}>
                <Text style={[{color: theme.colors.primary}]}>covid drug</Text>
              </View>
              <View style={[generalstyles.centerContent]}>
                <Text style={[{color: theme.colors.black, fontSize: 18}]}>
                  UGX 1200
                </Text>
              </View>
            </View>
          </View>
        </View>
        {/*here */}
        <View
          style={{
            backgroundColor: '#f4f4f4',
            margin: 5,
            padding: 5,
            borderRadius: 4,
          }}>
          <TextComponent category="Covid Drugs" />
          <View
            style={[
              generalstyles.flexStyles,
              {justifyContent: 'space-evenly'},
            ]}>
            <View
              style={{
                marginVertical: 10,
                marginHorizontal: 5,
                padding: 10,
              }}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1605289982774-9a6fef564df8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGRydWclMjBpbWFnZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                }}
                style={{
                  width: theme.dimensions.width / 3.4,
                  height: 150,
                }}
                resizeMode="cover"
              />
              <View style={[generalstyles.centerContent]}>
                <Text style={[{color: theme.colors.primary}]}>covid drug</Text>
              </View>
              <View style={[generalstyles.centerContent]}>
                <Text style={[{color: theme.colors.black, fontSize: 18}]}>
                  UGX 1200
                </Text>
              </View>
            </View>

            <View
              style={{
                marginVertical: 10,
                marginHorizontal: 5,
                padding: 10,
              }}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1605289982774-9a6fef564df8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGRydWclMjBpbWFnZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                }}
                style={{
                  width: theme.dimensions.width / 3.5,
                  height: 150,
                }}
                resizeMode="cover"
              />
              <View style={[generalstyles.centerContent]}>
                <Text style={[{color: theme.colors.primary}]}>covid drug</Text>
              </View>
              <View style={[generalstyles.centerContent]}>
                <Text style={[{color: theme.colors.black, fontSize: 18}]}>
                  UGX 1200
                </Text>
              </View>
            </View>
            <View
              style={{
                marginVertical: 10,
                marginHorizontal: 5,
                padding: 10,
              }}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1605289982774-9a6fef564df8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGRydWclMjBpbWFnZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                }}
                style={{
                  width: theme.dimensions.width / 3.5,
                  height: 150,
                }}
                resizeMode="cover"
              />
              <View style={[generalstyles.centerContent]}>
                <Text style={[{color: theme.colors.primary}]}>covid drug</Text>
              </View>
              <View style={[generalstyles.centerContent]}>
                <Text style={[{color: theme.colors.black, fontSize: 18}]}>
                  UGX 1200
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/*here */}
      </View>
      {/*drugs */}
    </ScrollView>
  );
};

export default DrugStoreScreen;
