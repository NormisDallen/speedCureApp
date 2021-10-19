import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import HomeCard from '../../components/Cards/HomeCards';
import StatusComponent from '../../components/ScrollView/StatusScrollView';
import {homecards} from '../../fakedata/homecards';
import {generalstyles} from '../../general/generalstyles';
import {FAB} from 'react-native-paper';
import {theme} from '../../theme/theme';

const HomeScreen = ({navigation}: any) => {
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
      {/* FAB*/}
      <FAB
        style={[generalstyles.absoluteStyles, {right: 10, bottom: 10}]}
        icon="plus"
        accessibilityLabel="post"
        animated={true}
        onPress={() => console.log('Pressed')}
        color={theme.colors.primary}
        theme={{
          colors: {
            accent: theme.colors.text,
          },
        }}
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