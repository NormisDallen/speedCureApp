import { View, SafeAreaView, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../../../theme/theme';
import PaymentCards from '../../../components/PaymentCards';


const PaymentDetails = () => {
  const navigation = useNavigation<any>();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cards, setCards] = useState([
    {
      id: 1,
      number: '**** ***** ***** 1234',
      date: '12/22',
      cvv: '123',
      type: 'visa',
      name: 'Katende Nicholas',
    },
    {
      id: 2,
      number: '**** ***** ***** 1234',
      date: '12/22',
      cvv: '123',
      type: 'mobile money',
      name: 'Katende Nicholas',
    },
  ]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.text }}>
      {/* details */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* card details */}
        <PaymentCards cards={cards} />
        {/* <OrderDetails /> */}

        {/* confirm payment */}
        <View
          style={{
            marginVertical: 40,
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
            // onPress={() => navigation.navigate('PaymentSuccess')}
            style={{
              backgroundColor:theme.colors.primary,
              borderRadius:20
            }}
          >
            Next
          </Button>
        </View>
        {/* confirm payment */}

        {/* order details */}
      </ScrollView>
      {/* details */}
    </SafeAreaView>
  );
};

export default PaymentDetails;
