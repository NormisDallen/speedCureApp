import { View, SafeAreaView, ScrollView } from 'react-native';
import React, { useState } from 'react';

import { CreditCardInput } from 'react-native-credit-card-input-plus';
import { Button } from 'react-native-paper';
import { theme } from '../../../theme/theme';
import CheckBoxComponent from '../../../components/CheckBoxComponent';


const AddCard = () => {
  const [cardDetails, setCardDetails] = useState<any>(null);

  const onAddCard = (details: any) => {
    setCardDetails(details);
  };
  const [checked, setChecked] = useState(false);

  const onSubmit = () => {
    //onsole.log(cardDetails.valid)
    console.log(JSON.stringify(cardDetails));
    //check if all the fields are filled and is valid
    if (cardDetails.valid) {
      console.log('all good');
    } else {
      console.log('not all good');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.text }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          paddingBottom: 200,
          marginTop: 50,
        }}
      >
        <CreditCardInput
          onChange={onAddCard}
          requiresName={true}
          allowScroll={false}
          horizontalScroll={false}
          labelStyle={{
            color: theme.colors.text,
            fontSize: 14,
            marginVertical: 5,
            marginHorizontal: 10,
          }}
          validColor={theme.colors.primary}
          invalidColor={theme.colors.red}
          placeholderColor={theme.colors.placeholder}
          onFocus={onAddCard}
          inputContainerStyle={{
            marginHorizontal: 10,
          }}
          inputStyle={{
            color: theme.colors.text,
            fontSize: 16,
            marginHorizontal: 10,
            paddingBottom: 1,
            borderBottomColor: theme.colors.text,
            borderBottomWidth: 0.5,
          }}
        />

        <CheckBoxComponent
          checked={checked}
          setChecked={setChecked}
          text="Set as default payment card"
        />

        {/* button */}
        <View
          style={{
            marginVertical: 100,
            marginHorizontal: 40,
          }}
        >
          <Button
            mode="contained"
            contentStyle={{
              flexDirection: 'row-reverse',
            }}
            //  loading={true}
            // buttonColor={theme.colors.buttonColor}
            // textColor={theme.colors.primary}
            // onPress={onSubmit}
          >
            Done
          </Button>
        </View>
        {/* button */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddCard;
