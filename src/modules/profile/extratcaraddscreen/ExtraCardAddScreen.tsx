import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS, hp, SCREEN, wp} from '@enums';
import {Header} from '@common/header';
import {BackArrow, CheckIcon, ExtraCardIcon, Picon} from '@assets';
import {Footer, Inputs, Spacer} from '@common';
import {useNavigation} from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';

const ExtraCardAddScreen = () => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
      <Header
        Backarrow={<BackArrow />}
        heading="Extra card"
        onPress={() => navigation.goBack()}
      />
      <Spacer height={hp(2)} />
      <View style={styles.innerContainer}>
        <View style={styles.btnRow}>
          {/* Credit Button */}
          <TouchableOpacity
            style={styles.btnCOn}
            onPress={() => setSelectedOption('credit')} // Set selected option
          >
            <View style={styles.icon}>
              <ExtraCardIcon />
            </View>
            <Spacer width={wp(3)} />
            <View>
              <Text>Credit</Text>
            </View>
            <Spacer width={wp(6)} />
            {selectedOption === 'credit' && <CheckIcon />}
            {/* Display CheckIcon */}
          </TouchableOpacity>

          {/* PayPal Button */}
          <TouchableOpacity
            style={styles.btnCOn}
            onPress={() => setSelectedOption('paypal')} // Set selected option
          >
            <View style={styles.icon}>
              <Picon />
            </View>
            <Spacer width={wp(3)} />
            <View>
              <Text>PayPal</Text>
            </View>
            <Spacer width={wp(6)} />
            {selectedOption === 'paypal' && <CheckIcon />}
            {/* Display CheckIcon */}
          </TouchableOpacity>
        </View>
        <Spacer height={hp(2)} />
        <View style={styles.textCon}>
          <Inputs label="Card id" placeholder="card id" />
          <Spacer />
          <Inputs label="Valid" placeholder="mm/yy" />
          <Spacer />
          <Inputs label="CCV" placeholder="3 digital" />
          <Spacer />
          <Inputs label="Name" placeholder="your name" />
          <Spacer />
          {/* Checkbox */}
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isChecked}
              onValueChange={setIsChecked} // Update the state when checkbox is toggled
              style={styles.checkbox}
            />
            <Spacer width={wp(3)} />
            <Text style={styles.checkboxLabel}>Save card?</Text>
          </View>
          <Spacer height={hp(2)} />
        </View>
      </View>
      <Footer
        title="Add"
        onPress={() => navigation.navigate(SCREEN.MyBooking)}
      />
    </View>
  );
};

export default ExtraCardAddScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BackGround,
  },
  innerContainer: {
    marginHorizontal: 10,
  },
  btnRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnCOn: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(45),
    height: hp(7),
  },
  icon: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    borderRadius: 5,
    width: wp(8),
    height: hp(3),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCon: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginTop: 10, // You can adjust the spacing
  },
  checkbox: {
    // Customize the checkbox if needed
  },
  checkboxLabel: {
    // marginLeft: 8,
    fontSize: 14,
    color: '#4F755B', // Customize the text color if needed
  },
});
