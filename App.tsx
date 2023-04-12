import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {Platform,PermissionsAndroid} from "react-native";
import BaseNavigation from './src/BaseNavigation/BaseNavigation';
import SplashScreen from 'react-native-splash-screen';
import Geolocation from 'react-native-geolocation-service';

const App = () => {
     async function requestPermissions() {
  if (Platform?.OS === 'ios') {
    const auth = await Geolocation.requestAuthorization("whenInUse");
    if(auth === "granted") {
       // do something if granted...

    }
  }

  if (Platform?.OS === 'android') {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    if ("granted" === PermissionsAndroid.RESULTS.GRANTED) {
      // do something if granted...
      //console.log("granted");
      Geolocation.getCurrentPosition(
        (position) => {
          console.log(position);
        },
        (error) => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
    }
  }
}
  useEffect(() => {
    requestPermissions();
    SplashScreen.hide();
    return () => {};
  }, []);
  return <BaseNavigation />;
};

export default App;
