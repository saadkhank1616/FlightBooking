import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {COLORS, hp, wp} from '@enums';
import {Header} from '@common/header';
import {BackArrow} from '@assets';
import {Footer, Inputs, Spacer} from '@common';

const InformationContactScren = () => {
  const navigation = useNavigation();
  const [gender, setGender] = useState(''); // State for gender selection
  const [showDropdown, setShowDropdown] = useState(false); // State to toggle dropdown visibility
  const genderOptions = ['Male', 'Female'];
  return (
    <View style={styles.container}>
      <Header
        heading="Contact"
        Backarrow={<BackArrow />}
        onPress={() => navigation.goBack()}
      />
      <Spacer />
      <View style={styles.innercontainer}>
        <Spacer />
        <View style={styles.date}>
          <View style={styles.birth}>
            <Inputs label="First Name" placeholder="First name" />
          </View>
          <View style={styles.dropdownContainer}>
            <Text style={styles.label}>Sex</Text>
            <TouchableOpacity
              style={styles.dropdown}
              onPress={() => setShowDropdown(!showDropdown)}>
              <Text style={styles.dropdownText}>{gender || 'Choose'}</Text>
              <Spacer />
            </TouchableOpacity>
            {showDropdown && (
              <View style={styles.dropdownOptions}>
                {genderOptions.map((option, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.option}
                    onPress={() => {
                      setGender(option);
                      setShowDropdown(false);
                    }}>
                    <Text style={styles.optionText}>{option}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        </View>
        <Spacer />
        <Inputs placeholder="Your Last name" label="Last Name" />
        <Spacer />
        <Inputs placeholder="9 digital" label="ID card" />
        <Spacer />
        <Inputs placeholder="@gamil.com" label="email" />
        <Spacer />
        <View style={styles.countryrow}>
          <Inputs placeholder="+86" label="Country Code" />
          <Spacer width={wp(6)} />
          <View style={styles.phone}>
            <Inputs placeholder="Phone Number" label="Phone number" />
          </View>
        </View>
        <Spacer />
        <Inputs placeholder="dd/mm/yy" label="Date of Birth" />
        <Spacer height={hp(6)} />
      </View>

      <Footer title="Save" />
    </View>
  );
};

export default InformationContactScren;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BackGround,
  },
  innercontainer: {
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  date: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dropdownContainer: {
    // marginTop: 5,
    // flex: 1,
    // marginLeft: wp('2%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    color: '#333',
    paddingHorizontal: 5,
    paddingBottom: 5,
  },
  dropdown: {
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'white',
  },
  dropdownText: {
    color: '#333',
  },
  dropdownOptions: {
    // borderWidth: 1,
    // borderColor: '#ccc',
    // borderRadius: 5,
    // marginTop: 5,
    // backgroundColor: 'white',
    // position: 'absolute',
    // zIndex: 10,
    // width: '100%',
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionText: {
    color: '#333',
  },
  birth: {
    width: wp(60),
  },
  countryrow: {
    flexDirection: 'row',
  },
  phone: {
    width: wp(64),
  },
});
