import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import HomeCard from '../../components/Cards/HomeCards';
import StatusComponent from '../../components/ScrollView/StatusScrollView';
import {homecards} from '../../fakedata/homecards';
import {generalstyles} from '../../general/generalstyles';
import {FAB} from 'react-native-paper';
import {theme} from '../../theme/theme';
import {useNavigation} from '@react-navigation/native';
import FloatingButton from '../../components/Buttons/FloatingButton';

const HomeScreen = ({navigation}: any) => {
  const [images, setStatus] = useState([
    {
      image: "https://res.cloudinary.com/itgenius/image/upload/v1680425666/WhatsApp_Image_2023-04-02_at_09.41.33_mykn6j.jpg",
      word: "Game"
  },
  {

      image: "https://res.cloudinary.com/itgenius/image/upload/v1680425666/WhatsApp_Image_2023-04-02_at_09.40.50_qbkzye.jpg",
      word: "Enjoyimg"
  },
  {

      image: "https://res.cloudinary.com/itgenius/image/upload/v1680425666/WhatsApp_Image_2023-04-02_at_09.40.52_nf7dm9.jpg",

      word: "Trip"
  },
  {

      image: "https://res.cloudinary.com/itgenius/image/upload/v1680425666/WhatsApp_Image_2023-04-02_at_09.40.48_etitkt.jp",
      word: "3 pointer"
  },
  ]);

  const [show, setShow] = useState([
    {
      id: 1,
      images: ['https://picsum.photos/700', 'https://picsum.photos/700'],
      event: 'immunisation',
    },
  ]);

  //navigation
  //const navigation = useNavigation<ReactNavigation.RootParamList>();

  return (
    <View style={[generalstyles.background, generalstyles.container]}>
      {/*FAB */}
      <FloatingButton
        icon="plus"
        accessibilityLabel="post"
        onPress={() => navigation.navigate('PostScreen')}
        styles={[generalstyles.absoluteStyles, {right: 10, bottom: 10}]}
        src="https://cdn-icons-png.flaticon.com/512/4471/4471009.png"
      />
      {/*FAB */}
      <FlatList
        ListHeaderComponent={
          <View>
            <StatusComponent images={images} showViews={true} />
            <View style={[generalstyles.viewStyle]}></View>
          </View>
        }
        contentContainerStyle={{
          marginBottom: 10,
        }}
        data={homecards}
        keyExtractor={item => String(item.id)}
        renderItem={({item, index}) => {
          return (
            <>
              <HomeCard
                images={item?.images}
                event={item?.event}
                hospitalName={item.hospitalName}
                comments={item?.comments}
                displayPicture={item?.displayPicture}
                time={item?.time}
                likes={item?.likes}
                description={item?.description}
              />
            </>
          );
        }}
      />
      {/*adverts */}
    </View>
  );
};

export default HomeScreen;
