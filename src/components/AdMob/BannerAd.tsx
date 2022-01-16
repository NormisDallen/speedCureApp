import React from 'react';
import {BannerAd, BannerAdSize, TestIds} from '@react-native-firebase/admob';

const adUnitId = __DEV__
  ? TestIds.BANNER
  : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

function BannerAdvert() {
  return (
    <BannerAd
      unitId={'ca-app-pub-1109935127679364~2981652919'}
      size={BannerAdSize.SMART_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
        keywords: ['supermarket'],
      }}
      onAdLoaded={() => {
        //console.log('Advert loaded');
      }}
      onAdFailedToLoad={error => {
        //console.error('Advert failed to load: ', error);
      }}
    />
  );
}

export default BannerAdvert;
