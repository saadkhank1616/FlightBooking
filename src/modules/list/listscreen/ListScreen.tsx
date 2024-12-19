import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {Spacer, CardList} from '@common';
import {Header} from '@common/header';

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
  {
    id: '2',
    fromCode: 'DAN',
    toCode: 'HAN',
    fromCity: 'Da Nang',
    toCity: 'Ha Noi',
    duration: '1h20m',
    departureTime: '08:00 AM',
    departureDate: '19 July, 2020',
    arrivalTime: '09:20 AM',
    arrivalDate: '19 July, 2020',
    airline: 'Pacific Airlines',
    price: '1,700,000 VND',
  },
  // Add more objects as needed
];

const ListScreen = () => {
  return (
    <View style={styles.container}>
      <Header heading="Which List" />
      <Spacer />
      <FlatList
        data={cardData}
        keyExtractor={item => item.id}
        renderItem={({item}) => <CardList item={item} />}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F7F8',
  },
  list: {
    // paddingHorizontal: 15,
  },
});
