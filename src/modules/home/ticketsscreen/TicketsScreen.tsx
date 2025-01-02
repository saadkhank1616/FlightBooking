import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {COLORS} from '@enums';
import {useNavigation} from '@react-navigation/native';
import {Header} from '@common/header';
import {BackArrow, BarCode, InfoIcon} from '@assets';
import {Footer, Spacer, TicketsCard} from '@common';

const cardData = [
  {
    id: '1',
    fromCode: 'SGN',
    toCode: 'HAN',
    fromCity: 'Ho Chi Minh',
    toCity: 'Ha Noi',
    duration: '1h45m',
    departureTime: '10:00 AM',
    departureDate: '18 July, 2020',
    arrivalTime: '12:00 PM',
    arrivalDate: '18 July, 2020',
    airline: 'Vietnam Airlines',
    price: '2,190,000 VND',
    Seat: 'B3',
    Eating: 'pho',
    louge: 'Yes',
    number: 'VN823',
    barcode: <BarCode />,
  },
];

const TicketsScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header
        heading="Ticket"
        Backarrow={<BackArrow />}
        icon={<InfoIcon />}
        onPress={() => navigation.goBack()}
      />
      <Spacer />
      <View style={styles.innerContainer}>
        <FlatList
          data={cardData}
          keyExtractor={item => item.id}
          renderItem={({item}) => <TicketsCard item={item} />}
          //   contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
          //   contentContainerStyle={{paddingBottom: 20}}
        />
      </View>
      <Footer title="Next" />
    </View>
  );
};

export default TicketsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BackGround,
  },
  innerContainer: {
    // marginHorizontal: 10,
  },
});
