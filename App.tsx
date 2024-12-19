// import {Button, Inputs, Onboarding, Spacer} from '@common';
import {RootNavigation} from '@navigation';
// import {Onboarding} from '@common/onboarding';
import React from 'react';
import {StyleSheet, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Button
        title="Sign in"
        onPress={() => console.log('button is pressed')}
      />
      <Spacer />
      <Inputs label="Email or Phone Number" placeholder="email" /> */}
      {/* <Onboarding /> */}
      {/* <Text>Hello</Text> */}
      <RootNavigation />
    </View>
  );
};

export default App;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
