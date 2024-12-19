import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header} from '@common/header';
import {ArrowLeft, SecondsIcon, VerifyIcon} from '@assets';
import {Footer, Spacer} from '@common';
import {COLORS, hp} from '@enums';
import {OtpInput} from '@common/otpinput';
import {useNavigation} from '@react-navigation/native';

const VerificationScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header
        heading="Verify"
        Backarrow={<ArrowLeft />}
        onPress={() => navigation.goBack()}
      />
      <Spacer height={hp(2)} />
      <View style={styles.inner_con}>
        <View style={styles.icon_con}>
          <VerifyIcon />
          <Spacer height={hp(2)} />
          <Text>We sent a verifycation code to </Text>
          <Text>+ 84 907 561 996</Text>
        </View>
        <Spacer height={hp(2)} />
        <View style={styles.text_con}>
          <View style={styles.otp_con}>
            <OtpInput />
            <OtpInput />
            <OtpInput />
            <OtpInput />
            <OtpInput />
            <OtpInput />
          </View>
          <Spacer height={hp(3)} />
          <View style={styles.seconds}>
            <Text style={styles.verify_text}>
              The verify code will be expire in{' '}
            </Text>
            <Text style={styles.time_text}>01:23</Text>
          </View>
          <View style={styles.resend_con}>
            <SecondsIcon />
            <Spacer height={hp(5)} />
            <Text style={styles.resend_text}>Resend code</Text>
          </View>
          <Spacer height={hp(1)} />
        </View>
      </View>
      <Footer title="Confirm" />
    </View>
  );
};

export default VerificationScreen;

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
    paddingHorizontal: 9,
  },
  text_con: {
    borderRadius: 10,
    paddingVertical: 10,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    // textAlign: 'center',
  },
  text_forgot: {
    textAlign: 'center',
    // width: 270,
    // backgroundColor: 'red',
    // paddingHorizontal: 65,
    // paddingVertical: 40,
    // fontSize: 14,
  },
  otp_con: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  seconds: {
    flexDirection: 'row',
    gap: 0,
    justifyContent: 'center',
  },
  verify_text: {
    color: COLORS.textcolor,
  },
  time_text: {
    color: COLORS.primary,
  },
  resend_text: {
    color: '#4980FF',
  },
  resend_con: {
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
