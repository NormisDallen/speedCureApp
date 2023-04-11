import { Text, View, SafeAreaView, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../../../theme/theme';
import CheckBoxComponent from '../../../components/CheckBoxComponent';


const PaymentSucces = () => {
  const navigation = useNavigation<any>();

  const [checked, setChecked] = useState(true);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.primary }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* success message */}
        <CheckBoxComponent
          checked={checked}
          setChecked={setChecked}
          text="Payment Completed"
        />
        {/* success message */}
        <View style={{ marginHorizontal: 20 }}>
          <Text>You have booked a new appointment with your trainer</Text>
        </View>
        {/* success message */}

        {/* card details */}

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
            // //  loading={true}
            // buttonColor={theme.colors.primary}
            // textColor={theme.colors.primary}
            // onPress={() => navigation.navigate('HomeSCreen')}
          >
            Done
          </Button>
        </View>
        {/* confirm payment */}

        {/* order details */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default PaymentSucces;
