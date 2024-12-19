import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ArrowLeft, Regestratation1} from '@assets';
import {Inputs, Spacer} from '@common';
import {COLORS, hp, SCREEN} from '@enums';
import {Footer} from '@common/footer';
import {Header} from '@common/header';
import {useNavigation} from '@react-navigation/native';

const RegestrationScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header
        heading="Register"
        Backarrow={<ArrowLeft />}
        onPress={() => navigation.goBack()}
      />
      <Spacer height={hp(2)} />
      <View style={styles.inner_con}>
        <View style={styles.icon_con}>
          <Regestratation1 />
          <Spacer height={hp(2)} />
          <Text>Fill full your information on this to register</Text>
        </View>
        <Spacer height={hp(2)} />
        <View style={styles.text_con}>
          <Inputs label="Name" placeholder="Name" />
          <Spacer />
          <Inputs label="Email" placeholder="Email" />
          <Spacer />
          <Inputs label="Phone Number" placeholder="phone number" />
          <Spacer height={hp(10)} />
        </View>
      </View>
      <Spacer height={hp(7)} />
      {/* <View style={styles.footer}>
        <Button title="Register" onPress={() => console.log('pressed')} />
      </View> */}
      <Footer title="Register" onPress={() => console.log('pressed')} />
    </View>
  );
};

export default RegestrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F7F8',
    // paddingHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    // gap: 125,
    backgroundColor: 'white',
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  header_text: {
    fontSize: 20,
    color: COLORS.textcolor,
    fontWeight: 'bold',
  },
  icon_con: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 50,
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
  footer: {
    backgroundColor: 'white',
    paddingVertical: 25,
    paddingHorizontal: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
