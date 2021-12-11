import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import BaseNavigation from './src/BaseNavigation/BaseNavigation';
import SplashScreen from 'react-native-splash-screen';
//import LottieView from 'lottie-react-native';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
    return () => {};
  }, []);
  return <BaseNavigation />;
};

export default App;
