import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '@enums';

const PersnoldataScreen = () => {
  return (
    <View style={styles.container}>
      <Text>PersnoldataScreen</Text>
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
});
