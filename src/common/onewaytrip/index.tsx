import {Text, View} from 'react-native';
import React from 'react';
import {styles} from './style';
import {Spacer} from '@common/spacer';
import {hp, wp} from '@enums';
import {FormToFlight} from '@common/formtoflight';
import {DepartInput} from '@common/departinput';
import {ClassIcon, PassengerIcon, WeightIocn} from '@assets';
import {Button} from '@common/button';

export const OneWayTrip = () => {
  return (
    <View style={styles.container}>
      <Spacer height={hp(2)} />
      <FormToFlight />
      <Spacer height={hp(4)} />
      <View style={styles.input_sec}>
        <DepartInput text="Depart" placeholder="2024-12-12" />
      </View>
      <Spacer height={hp(2)} />
      <View style={styles.passenger_input_con}>
        <Text>Passenger</Text>
        <Spacer />
        <View style={styles.passenger_con}>
          <View style={styles.passenger}>
            <PassengerIcon />
            <Spacer width={wp(2)} />
            <Text>02</Text>
          </View>
          <Spacer width={wp(5)} />
          <View style={styles.weight}>
            <WeightIocn />
            <Spacer width={wp(2)} />
            <Text>02</Text>
          </View>
        </View>
        <Spacer />
      </View>
      <Spacer height={hp(2)} />
      <View style={styles.class_con}>
        <Text>Class</Text>
        <Spacer />
        <View style={styles.class}>
          <ClassIcon />
          <Spacer width={wp(2)} />
          <Text>Bussiness</Text>
        </View>
        <Spacer />
      </View>
      <Spacer height={hp(4)} />
      <Button title="Search Flights" onPress={() => console.log('pressed')} />
      <Spacer height={hp(4)} />
    </View>
  );
};
