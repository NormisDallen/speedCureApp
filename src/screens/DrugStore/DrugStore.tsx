import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import { generalstyles } from '../../general/generalstyles';
import { theme } from '../../theme/theme';
import { SliderBox } from 'react-native-image-slider-box';
import TextComponent from '../../components/TextComponent/Text';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';




const categories = [
  {
    category: [
      {
        image:
          'https://firebasestorage.googleapis.com/v0/b/deliveroo-5333f.appspot.com/o/WhatsApp%20Image%202023-04-06%20at%203.28.14%20PM%20(1).jpeg?alt=media&token=241811aa-24b2-4449-8c09-a163527a495f',
        name: 'Caps',
      },
      {
        image:
          'https://firebasestorage.googleapis.com/v0/b/deliveroo-5333f.appspot.com/o/WhatsApp%20Image%202023-04-06%20at%203.28.14%20PM.jpeg?alt=media&token=9c18215f-d2c4-4e06-9444-5ba39a44d355',
        name: 'T-Shirts',
      },
      {
        image:
          'https://firebasestorage.googleapis.com/v0/b/deliveroo-5333f.appspot.com/o/WhatsApp%20Image%202023-04-06%20at%203.28.16%20PM.jpeg?alt=media&token=00542997-4100-4809-901c-acd43f0e40d8',
        name: 'Wrist Bands',
      },
      {
        image:
          'https://firebasestorage.googleapis.com/v0/b/deliveroo-5333f.appspot.com/o/WhatsApp%20Image%202023-04-06%20at%203.28.15%20PM%20(2).jpeg?alt=media&token=15d8b936-9b3a-4682-b8bd-15060f47cefd',
        name: 'Mugs',
      },
      {
        image:
          'https://firebasestorage.googleapis.com/v0/b/deliveroo-5333f.appspot.com/o/WhatsApp%20Image%202023-04-06%20at%203.28.14%20PM%20(1).jpeg?alt=media&token=241811aa-24b2-4449-8c09-a163527a495f',
        name: 'Caps',
      },
      {
        image:
          'https://firebasestorage.googleapis.com/v0/b/deliveroo-5333f.appspot.com/o/WhatsApp%20Image%202023-04-06%20at%203.28.14%20PM.jpeg?alt=media&token=9c18215f-d2c4-4e06-9444-5ba39a44d355',
        name: 'T-Shirts',
      },
      {
        image:
          'https://firebasestorage.googleapis.com/v0/b/deliveroo-5333f.appspot.com/o/WhatsApp%20Image%202023-04-06%20at%203.28.16%20PM.jpeg?alt=media&token=00542997-4100-4809-901c-acd43f0e40d8',
        name: 'Wrist Bands',
      },
      {
        image:
          'https://firebasestorage.googleapis.com/v0/b/deliveroo-5333f.appspot.com/o/WhatsApp%20Image%202023-04-06%20at%203.28.15%20PM%20(2).jpeg?alt=media&token=15d8b936-9b3a-4682-b8bd-15060f47cefd',
        name: 'Mugs',
      },
    ],
  },

];

const images = [
  'https://res.cloudinary.com/itgenius/image/upload/v1680425666/WhatsApp_Image_2023-04-02_at_09.40.52_nf7dm9.jpg',
  'https://res.cloudinary.com/itgenius/image/upload/v1680425666/WhatsApp_Image_2023-04-02_at_09.40.52_nf7dm9.jpg',
  'https://res.cloudinary.com/itgenius/image/upload/v1680425666/WhatsApp_Image_2023-04-02_at_09.40.52_nf7dm9.jpg',
];




const DrugStoreScreen = () => {

  const navigation =  useNavigation<any>()

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
          ImageComponentStyle={{ borderRadius: 15, width: '95%', marginTop: 15 }}
          imageLoadingColor={theme.colors.text}
          resizeMethod={'resize'}
          resizeMode={'cover'}
          paginationBoxVerticalPadding={10}
          circleLoop
        />
      </View>



      {/*coursel */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View>
          <View style={[generalstyles.viewStyle, { marginVertical: 10 }]} />
          <View style={[generalstyles.centerContent]}>
            <Text style={{ color: theme.colors.text }}>Categories</Text>
          </View>
          {categories.map((category, index) => {
            return (
              <View
                key={index}
                style={[
                  generalstyles.flexStyles,
                  { justifyContent: 'space-evenly' },
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
                        source={{ uri: cat.image }}
                        resizeMode="cover"
                        style={{
                          height: 100,
                          width: theme.dimensions.width / 4.8,
                          borderRadius: 10,
                        }}
                      />
                    </View>
                    <View style={[generalstyles.centerContent]}>
                      <Text style={{ color: theme.colors.primary }}>
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

      {/*drugs */}
      <View>

        <View
          style={{
            margin: 5,
            padding: 5,
            borderRadius: 4,
          }}>
          <TextComponent category="Caps" />
          <View
            style={[
              generalstyles.flexStyles,
              { justifyContent: 'space-evenly' },
            ]}>
            <View
              style={{
                marginVertical: 10,
                marginHorizontal: 5,
                padding: 10,
              }}>
              <Image
                source={{
                  uri: 'https://firebasestorage.googleapis.com/v0/b/deliveroo-5333f.appspot.com/o/WhatsApp%20Image%202023-04-06%20at%203.28.14%20PM%20(1).jpeg?alt=media&token=241811aa-24b2-4449-8c09-a163527a495f',
                }}
                style={{
                  width: theme.dimensions.width / 2.5,
                  height: 150,
                }}
                resizeMode="cover"
              />
              <View style={[generalstyles.centerContent]}>
                <Text style={[{ color: theme.colors.primary }]}>KIU Caps</Text>
              </View>
              <View style={[generalstyles.centerContent]}>
                <Text style={[{ color: theme.colors.black, fontSize: 18 }]}>
                  UGX 50,000.0/=
                </Text>
              </View>
              {/* show now */}
              <Button
                mode="contained"
                contentStyle={{
                  flexDirection: 'row-reverse',
                }}
                style={{
                  backgroundColor:theme.colors.primary,
                  borderRadius:20
                }}
                onPress={()=>navigation.navigate("PaymentStack")}
                
              >
                Shop Now
              </Button>
              {/* show now */}
            </View>


            <View
              style={{
                marginVertical: 10,
                marginHorizontal: 5,
                padding: 10,
              }}>
              <Image
                source={{
                  uri: 'https://firebasestorage.googleapis.com/v0/b/deliveroo-5333f.appspot.com/o/WhatsApp%20Image%202023-04-06%20at%203.28.14%20PM.jpeg?alt=media&token=9c18215f-d2c4-4e06-9444-5ba39a44d355',
                }}
                style={{
                  width: theme.dimensions.width / 2.5,
                  height: 150,
                }}
                resizeMode="cover"
              />
              <View style={[generalstyles.centerContent]}>
                <Text style={[{ color: theme.colors.primary }]}>Yellow Caps</Text>
              </View>
              <View style={[generalstyles.centerContent]}>
                <Text style={[{ color: theme.colors.black, fontSize: 18 }]}>
                UGX 50,000.0/=
                </Text>
              </View>
                            {/* show now */}
                            <Button
                mode="contained"
                contentStyle={{
                  flexDirection: 'row-reverse',
                }}
                style={{
                  backgroundColor:theme.colors.primary,
                  borderRadius:20
                }}
                onPress={()=>navigation.navigate("PaymentStack")}
              >
                Shop Now
              </Button>
              {/* show now */}
            </View>

          </View>

        </View>
         {/* caps */}

         {/* tshirs */}
         <View
          style={{
            margin: 5,
            padding: 5,
            borderRadius: 4,
          }}>
          <TextComponent category="T-Shirts" />
          <View
            style={[
              generalstyles.flexStyles,
              { justifyContent: 'space-evenly' },
            ]}>
            <View
              style={{
                marginVertical: 10,
                marginHorizontal: 5,
                padding: 10,
              }}>
              <Image
                source={{
                  uri: 'https://firebasestorage.googleapis.com/v0/b/deliveroo-5333f.appspot.com/o/WhatsApp%20Image%202023-04-06%20at%203.28.15%20PM%20(1).jpeg?alt=media&token=c5c8f7ad-5879-4ab1-b6cd-d70b9e9e8e94',
                }}
                style={{
                  width: theme.dimensions.width / 2.5,
                  height: 150,
                }}
                resizeMode="cover"
              />
              <View style={[generalstyles.centerContent]}>
                <Text style={[{ color: theme.colors.primary }]}>Green KIU T-Shirts</Text>
              </View>
              <View style={[generalstyles.centerContent]}>
                <Text style={[{ color: theme.colors.black, fontSize: 18 }]}>
                  UGX 50,000.0/=
                </Text>
              </View>
              {/* show now */}
              <Button
                mode="contained"
                contentStyle={{
                  flexDirection: 'row-reverse',
                }}
                style={{
                  backgroundColor:theme.colors.primary,
                  borderRadius:20
                }}
                onPress={()=>navigation.navigate("PaymentStack")}
              >
                Shop Now
              </Button>
              {/* show now */}
            </View>


            <View
              style={{
                marginVertical: 10,
                marginHorizontal: 5,
                padding: 10,
              }}>
              <Image
                source={{
                  uri: 'https://firebasestorage.googleapis.com/v0/b/deliveroo-5333f.appspot.com/o/WhatsApp%20Image%202023-04-06%20at%203.28.14%20PM.jpeg?alt=media&token=9c18215f-d2c4-4e06-9444-5ba39a44d355',
                }}
                style={{
                  width: theme.dimensions.width / 2.5,
                  height: 150,
                }}
                resizeMode="cover"
              />
              <View style={[generalstyles.centerContent]}>
                <Text style={[{ color: theme.colors.primary }]}>Yellow KIU T-Shirts</Text>
              </View>
              <View style={[generalstyles.centerContent]}>
                <Text style={[{ color: theme.colors.black, fontSize: 18 }]}>
                UGX 50,000.0/=
                </Text>
              </View>
                            {/* show now */}
                            <Button
                mode="contained"
                contentStyle={{
                  flexDirection: 'row-reverse',
                }}
                style={{
                  backgroundColor:theme.colors.primary,
                  borderRadius:20
                }}
                onPress={()=>navigation.navigate("PaymentStack")}
              >
                Shop Now
              </Button>
              {/* show now */}
            </View>

          </View>

        </View>
         {/* tshirts */}


      </View>
      {/*drugs */}
    </ScrollView>
  );
};

export default DrugStoreScreen;

