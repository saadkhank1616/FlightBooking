import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS, hp, wp} from '@enums';
import {Header} from '@common/header';
import {BackArrow, PersnolDataImage, ResetIocn, UploadIcon} from '@assets';
import {Footer, Inputs, Spacer} from '@common';
import {useNavigation} from '@react-navigation/native';

const PersnoldataScreen = () => {
  const navigation = useNavigation();
  const [gender, setGender] = useState(''); // State for gender selection
  const [showDropdown, setShowDropdown] = useState(false); // State to toggle dropdown visibility

  const genderOptions = ['Male', 'Female'];

  return (
    <View style={styles.container}>
      <Header
        heading="Persnoldata"
        Backarrow={<BackArrow />}
        icon={<ResetIocn />}
        onPress={() => navigation.goBack()}
      />
      <Spacer height={hp(2)} />
      <View style={styles.innerContainer}>
        <View style={styles.image}>
          <Spacer height={hp(5)} />
          <PersnolDataImage />
          <TouchableOpacity style={styles.upload}>
            <UploadIcon />
          </TouchableOpacity>
        </View>
        <Spacer />
        <View>
          <Inputs label="Name" placeholder="name" />
          <Spacer height={hp(2)} />
          <Inputs label="ID Card" placeholder="9 digits" />
          <Spacer height={hp(2)} />
          <Inputs label="email" placeholder="@gmail.com" />
          <Spacer height={hp(2)} />
        </View>
        <View style={styles.date}>
          <View style={styles.birth}>
            <Inputs label="Date of birth" placeholder="dd/mm/yy" />
          </View>
          <View style={styles.dropdownContainer}>
            <Text style={styles.label}>Gender</Text>
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
        <Spacer height={hp(5)} />
      </View>
      <Footer title="Save" />
    </View>
  );
};

export default PersnoldataScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BackGround,
  },
  innerContainer: {
    marginHorizontal: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 25,
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  date: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  upload: {
    position: 'relative',
    bottom: hp('3%'),
    left: wp('7'),
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
});
