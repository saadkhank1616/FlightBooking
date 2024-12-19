import {StyleSheet, View} from 'react-native';
import React from 'react';
import {COLORS} from '@enums';
import {Header} from '@common/header';

const PersnoldataScreen = () => {
  // hello feat/datascreen
  return (
    <View style={styles.container}>
      <Header heading="persnol data" />
      <View style={styles.innerContainer}></View>
    </View>
  );
};

export default PersnoldataScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BackGround,
    flexDirection: 'row',
  },
  innerContainer: {
    marginHorizontal: 10,
    backgroundColor: 'white',
  },
});
