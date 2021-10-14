import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import HomeCard from '../../components/Cards/HomeCards';
import StatusComponent from '../../components/ScrollView/StatusScrollView';
import {homecards} from '../../fakedata/homecards';
import {generalstyles} from '../../general/generalstyles';

const HomeScreen = () => {
  const [images, setStatus] = useState([
    {image: '../../assets/appstore.png', word: 'chilling'},
    {image: '../../assets/playstore.png', word: 'mulago hospital'},
    {image: '../../assets/playstore.png', word: 'adfa medicare'},
    {image: '../../assets/playstore.png', word: 'pharmacy'},
    {image: '../../assets/playstore.png', word: 'naalya'},
    {image: '../../assets/playstore.png', word: 'kawempe hospital'},
  ]);

  const [show, setShow] = useState([
    {
      id: 1,
      images: ['https://picsum.photos/700', 'https://picsum.photos/700'],
      event: 'immunisation',
    },
  ]);

  return (
    <View style={[generalstyles.background, generalstyles.container]}>
      <FlatList
        ListHeaderComponent={
          <View>
            <StatusComponent images={images} showViews={true} />
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
              />
              <View style={[generalstyles.viewStyle]}></View>
            </>
          );
        }}
      />
      {/*adverts */}
    </View>
  );
};

export default HomeScreen;
