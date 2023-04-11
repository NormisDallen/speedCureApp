import { Text, View } from 'react-native';
import React from 'react';
import { Checkbox } from 'react-native-paper';
import { theme } from '../theme/theme';
import { generalstyles } from '../general/generalstyles';

const CheckBoxComponent = ({ checked, setChecked, text }: any) => {
  return (
    <View
      style={[
        generalstyles.flexStyles,
        { alignItems: 'center', marginHorizontal: 20 },
      ]}
    >
      <Checkbox
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
        }}
      />
      <View>
        <Text>{text}</Text>
      </View>
    </View>
  );
};

export default CheckBoxComponent;
