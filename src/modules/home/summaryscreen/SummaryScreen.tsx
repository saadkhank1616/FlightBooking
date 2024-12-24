import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, wp} from '@enums';
import {Header} from '@common/header';
import {BackArrow, InfoIcon} from '@assets';
import {CardList, Footer, Spacer, SummaryCard, SummaryTotal} from '@common';

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
  },
];

const SummaryScreen = () => {
  return (
    <View style={styles.container}>
      <Header heading="Summary" Backarrow={<BackArrow />} icon={<InfoIcon />} />
      <Spacer />
      <View style={styles.textcontainer}>
        <Text style={styles.textheading}>One-way, (ThUR, 18 July, 2020)</Text>
      </View>
      <View style={styles.innercontainer}>
        <FlatList
          data={cardData}
          keyExtractor={item => item.id}
          renderItem={({item}) => <CardList item={item} />}
          //   contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
          //   contentContainerStyle={{paddingBottom: 20}}
        />
        <SummaryCard />
        <Spacer />
        <SummaryTotal />
      </View>
      <Footer title="Next" />
    </View>
  );
};

export default SummaryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BackGround,
  },
  innercontainer: {
    // marginHorizontal: wp(1),
  },
  textcontainer: {
    marginHorizontal: wp(2),
  },
  textheading: {
    color: COLORS.textcolor,
  },
});
