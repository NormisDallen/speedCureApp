import {
  TestIds,
  RewardedAd,
  RewardedAdEventType,
} from '@react-native-firebase/admob';
import {Alert} from 'react-native';

export const ShowRewardAd = () => {
  // Create a new instance
  const rewardAd = RewardedAd.createForAdRequest(TestIds.REWARDED);

  // Add event handlers
  rewardAd.onAdEvent((type, error) => {
    if (type === RewardedAdEventType.LOADED) {
      rewardAd.show();
    }

    if (type === RewardedAdEventType.EARNED_REWARD) {
      console.log('User earned reward of 5 lives');
      Alert.alert(
        'Reward Ad',
        'You just earned a reward of 5 lives',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: true},
      );
    }
  });

  // Load a new advert
  rewardAd.load();
};

//export default ShowRewardAd;
