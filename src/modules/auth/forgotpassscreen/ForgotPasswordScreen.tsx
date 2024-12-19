import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header} from '@common/header';
import {ArrowLeft, ForgotIcon} from '@assets';
import {Footer, Inputs, Spacer} from '@common';
import {hp, SCREEN} from '@enums';
import {useNavigation} from '@react-navigation/native';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header
        heading="Forgot Password"
        Backarrow={<ArrowLeft />}
        onPress={() => navigation.goBack()}
      />
      <Spacer height={hp(2)} />
      <View style={styles.inner_con}>
        <View style={styles.icon_con}>
          <ForgotIcon />
          <Spacer height={hp(2)} />
          <Text style={styles.text_forgot}>
            Enter your phone number below, we’ll send you a verify code.tt
          </Text>
        </View>
        <Spacer height={hp(2)} />
        <View style={styles.text_con}>
          <Inputs label="Phone Number" placeholder="9 digital" />
          <Spacer height={hp(8)} />
        </View>
      </View>
      <Footer
        title="Confirm"
        onPress={() => navigation.navigate(SCREEN.Verify)}
      />
    </View>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F7F8',
  },
  icon_con: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 50,
    textAlign: 'center',
  },
  inner_con: {
    paddingHorizontal: 10,
  },
  text_con: {
    borderRadius: 10,
    paddingVertical: 10,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  text_forgot: {
    textAlign: 'center',
    width: 270,
    // backgroundColor: 'red',
    // paddingHorizontal: 65,
    // paddingVertical: 40,
    // fontSize: 14,
  },
});
