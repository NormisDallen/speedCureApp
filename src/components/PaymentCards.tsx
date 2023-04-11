import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { theme } from '../theme/theme';
import { useNavigation } from '@react-navigation/native';
import { CardView } from 'react-native-credit-card-input-plus';
// import sha256 from 'crypto-js/sha256';
import { generalstyles } from '../general/generalstyles';
import { Image } from 'react-native-elements';

const PaymentCards = ({ cards }: any) => {
    const navigation = useNavigation<any>();
    return (
        <View>
            <View style={[generalstyles.centerContent, { marginBottom: 20 }]}>
                <Text style={styles.paymentMethods}>Choose Payment Methods</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {cards.length === 0 ? (
                    <TouchableOpacity
                        style={[generalstyles.centerContent]}
                        onPress={() => navigation.navigate('AddCard')}
                    >
                        <AntDesign
                            name={'plus'}
                            color={theme.colors.text}
                            size={100}
                            style={{
                                backgroundColor: theme.colors.placeholder,
                                borderRadius: 10,
                                padding: 10,
                            }}
                        />
                    </TouchableOpacity>
                ) : (
                    <View style={[generalstyles.flexStyles, styles.cardStyle]}>
                        <TouchableOpacity
                            style={[generalstyles.centerContent]}
                            onPress={() => navigation.navigate('AddCard')}
                        >
                            <AntDesign
                                name={'plus'}
                                color={theme.colors.text}
                                size={80}
                                style={{
                                    backgroundColor: theme.colors.primary,
                                    borderRadius: 10,
                                    marginTop: 10,
                                    padding: 10,
                                    height: 160,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    alignSelf: 'center',
                                    alignContent: 'center',
                                }}
                            />
                        </TouchableOpacity>

                        {
                            <CardView
                                number={cards[0].number}
                                expiry={cards[0].date}
                                name={cards[0].name}
                                cvc={cards[0].cvv}
                                brand={cards[0].type}
                                clickable={true}
                                scale={0.8}
                            />
                        }
                        <View style={{marginRight:100, paddingRight:50}}>
                            <TouchableOpacity>
                                <Image
                                    style={{ height: 140, width: 200 }}
                                    source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc5QuhrD_-NUE38CEW2-iaOMpwhhOr_5LxJLIHE8U&s" }}
                                />
                            </TouchableOpacity>
                        </View>


                    </View>
                )}
            </ScrollView>
        </View>
    );
};

export default PaymentCards;

const styles = StyleSheet.create({
    paymentMethods: {
        color: theme.colors.primary,
        fontSize: 20,
        fontWeight: 'bold',
    },
    cardStyle: {
        alignItems: 'center',
        marginVertical: 0,
    },
});
