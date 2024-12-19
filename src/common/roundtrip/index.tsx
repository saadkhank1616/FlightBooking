import {Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import {FormToFlight} from '@common/formtoflight';
import {Spacer} from '@common/spacer';
import {hp, wp} from '@enums';
import {DepartInput} from '@common/departinput';
import {ClassIcon, PassengerIcon, WeightIocn} from '@assets';
import {Button} from '@common/button';
import {CustomModal} from '@common/modal';
import {CustomCalendar} from '@common/calendar';
import {ChooseTravelModal} from '@common/choosetravelmodal';
import {ChooseClassModal} from '@common/chooseclassmodal';

export const RoundTrip = () => {
  // Modal visibility state
  const [isModalVisibleCalendar, setModalVisibleClendar] = useState(false);
  const [isModalVisiblePaseenger, setModalVisiblePassenger] = useState(false);
  const [isModalVisibleClass, setModalVisibleClass] = useState(false);

  const handelVisibleCalendar = () => {
    // Show the modal instead of immediately navigating
    setModalVisibleClendar(true);
  };
  const handelVisiblePassenger = () => {
    // Show the modal instead of immediately navigating
    setModalVisiblePassenger(true);
  };
  const handelVisibleClass = () => {
    // Show the modal instead of immediately navigating
    setModalVisibleClass(true);
  };
  return (
    <View style={styles.container}>
      <Spacer height={hp(2)} />
      <FormToFlight />
      <Spacer height={hp(4)} />
      <View style={styles.input_sec}>
        <View style={styles.depart_con}>
          <DepartInput
            text="Depart"
            placeholder="2024-12-12"
            onPress={handelVisibleCalendar}
          />
        </View>
        <View style={styles.depart_con}>
          <DepartInput
            text="Return"
            placeholder="2024-12-12"
            onPress={handelVisibleCalendar}
          />
        </View>
      </View>
      <Spacer height={hp(2)} />
      <TouchableOpacity
        style={styles.passenger_input_con}
        onPress={handelVisiblePassenger}>
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
      </TouchableOpacity>
      <Spacer height={hp(2)} />
      <View style={styles.class_con}>
        <Text>Class</Text>
        <Spacer />
        <TouchableOpacity style={styles.class} onPress={handelVisibleClass}>
          <ClassIcon />
          <Spacer width={wp(2)} />
          <Text>Bussiness</Text>
        </TouchableOpacity>
        <Spacer />
      </View>
      <Spacer height={hp(4)} />
      <Button title="Search Flights" onPress={() => console.log('pressed')} />
      <Spacer height={hp(4)} />
      <CustomModal
        visible={isModalVisibleCalendar}
        onClose={() => setModalVisibleClendar(false)}>
        <View style={styles.modal_con}>
          <CustomCalendar onPress={() => setModalVisibleClendar(false)} />
        </View>
      </CustomModal>
      <CustomModal
        visible={isModalVisiblePaseenger}
        onClose={() => setModalVisiblePassenger(false)}>
        <View style={styles.modal_con}>
          <ChooseTravelModal onPress={() => setModalVisiblePassenger(false)} />
        </View>
      </CustomModal>
      <CustomModal
        visible={isModalVisibleClass}
        onClose={() => setModalVisibleClass(false)}>
        <View style={styles.modal_con}>
          <ChooseClassModal onPress={() => setModalVisibleClass(false)} />
        </View>
      </CustomModal>
    </View>
  );
};
