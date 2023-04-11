import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import { CreditCardInput } from 'react-native-credit-card-input-plus';
import { Button } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';
import { theme } from '../../../theme/theme';
import CheckBoxComponent from '../../../components/CheckBoxComponent';
import { generalstyles } from '../../../general/generalstyles';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const EditCard = ({ card }: any) => {
  const [cardDetails, setCardDetails] = useState<any>(null);
  const { params } = useRoute<any>();

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
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.primary }}>
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
          placeholders={{
            number: params?.card?.number,
            cvc: params?.card?.cvv,
            expiry: params?.card?.date,
            name: params?.card?.name,
          }}
          validColor={theme.colors.primary}
          invalidColor={theme.colors.red}
          placeholderColor={theme.colors.text}
          onFocus={onAddCard}
          inputContainerStyle={{
            marginHorizontal: 20,
          }}
          inputStyle={{
            color: theme.colors.text,
            fontSize: 16,
            marginHorizontal: 10,
            paddingBottom: 1,
            borderBottomColor: theme.colors.text,
            borderBottomWidth: 0.5,
          }}
          cardScale={1.1}
        />

        <CheckBoxComponent
          checked={checked}
          setChecked={setChecked}
          text="Set as default payment card"
        />

        {/* delete card */}
        <TouchableOpacity
          style={[
            generalstyles.flexStyles,
            {
              alignItems: 'center',
              marginHorizontal: 40,
              borderBottomColor: theme.colors.text,
              borderBottomWidth: 0.5,
              paddingVertical: 10,
            },
          ]}
          onPress={() =>
            Alert.alert(
              'Delete Card',
              'Are you sure you want to delete this card?',
              [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
              ],
            )
          }
        >
          <View>
            <Text
              style={[
                { color: theme.colors.red, fontSize: 20, fontWeight: 'bold' },
              ]}
            >
              Delete Card
            </Text>
          </View>
        </TouchableOpacity>
        {/* delete card */}

        {/* button */}
        <View
          style={{
            marginVertical: 50,
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
            Save
          </Button>
        </View>
        {/* button */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditCard;
