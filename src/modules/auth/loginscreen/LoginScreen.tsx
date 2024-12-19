import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Button, Inputs, Spacer} from '@common';
import {COLORS, hp, SCREEN} from '@enums';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();

  const handelSignUp = () => {
    navigation.navigate(SCREEN.Regestraton);
  };
  return (
    <View style={styles.container}>
      <Spacer height={hp(30)} />
      <Text style={styles.text}>Login</Text>
      <Spacer height={hp(2)} />
      <Inputs placeholder="Email" label="Email" />
      <Spacer height={hp(2)} />
      <Inputs placeholder="Phone Number" label="Phone Number" />
      <Spacer height={hp(4)} />
      <Button title="Sign In" onPress={() => console.log('pressed')} />
      <Spacer height={hp(2)} />
      <TouchableOpacity style={styles.btn_container}>
        <Text style={styles.btn_text}>Guest</Text>
      </TouchableOpacity>
      <Spacer height={hp(2)} />
      <TouchableOpacity
        onPress={() => navigation.navigate(SCREEN.Forgotpassword)}>
        <Text style={styles.forgottext}>Forgot Password</Text>
      </TouchableOpacity>
      <Spacer height={hp(6)} />
      <View style={styles.footertextcon}>
        <Text style={styles.dont_text}>Dont have an account?</Text>
        <TouchableOpacity onPress={handelSignUp}>
          <Text style={styles.signup_text}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 15,
  },
  text: {
    fontSize: 20,
    color: '#00579A',
    fontWeight: 'semibold',
  },
  btn_container: {
    backgroundColor: '#F6E8C3',
    padding: 15,
    borderRadius: 16,
  },
  btn_text: {
    color: '#DAA210',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  forgottext: {
    color: '#2F80ED',
    // fontWeight: '300',
  },
  footertextcon: {
    flexDirection: 'row',
    gap: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dont_text: {
    color: '#808C95',
    // fontWeight: '300',
  },
  signup_text: {
    color: COLORS.primary,
  },
});
