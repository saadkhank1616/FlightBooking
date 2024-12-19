import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {styles} from './style';
import {MultiAddCard} from '@common/multiadd';
import {Spacer} from '@common/spacer';
import {hp, wp} from '@enums';
import {Button} from '@common/button';
import {PassengerIcon} from '@assets';

const flightData = [
  {
    id: '1',
    flightNumber: 'Flight 1',
    from: {city: 'Quang Ninh', code: 'Van Don (QNA)'},
    to: {city: 'Hanoi', code: 'Noi Bai (HAN)'},
    depart: '2024-12-12',
    class: 'Business',
  },
  {
    id: '2',
    flightNumber: 'Flight 2',
    from: {city: 'Ho Chi Minh', code: 'Tan Son Nhat (SGN)'},
    to: {city: 'Da Nang', code: 'Da Nang (DAD)'},
    depart: '2024-12-13',
    class: 'Economy',
  },
  {
    id: '3',
    flightNumber: 'Flight 3',
    from: {city: 'Hue', code: 'Phu Bai (HUI)'},
    to: {city: 'Nha Trang', code: 'Cam Ranh (CXR)'},
    depart: '2024-12-14',
    class: 'First Class',
  },
];

export const MultiTrip = () => {
  const renderMultiAddCard = ({item}) => (
    <View>
      <Spacer />
      <MultiAddCard flight={item} />
      <Spacer height={hp(2)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={flightData}
        renderItem={renderMultiAddCard}
        keyExtractor={item => item.id}
        ListFooterComponent={<Button title="Add 3rd Flight" />}
      />
      <Spacer height={hp(3)} />
      <View style={styles.passenger_input_con}>
        <Text>Passenger</Text>
        <Spacer />
        <View style={styles.passenger_con}>
          <View style={styles.passenger}>
            <PassengerIcon />
            <Spacer width={wp(2)} />
            <Text>02</Text>
          </View>
        </View>
        <Spacer />
      </View>
      <Spacer />
      <Button title="Search Flights" />
    </View>
  );
};
