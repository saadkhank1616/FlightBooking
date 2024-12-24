import {Text, View} from 'react-native';
import React from 'react';
import {styles} from './style';
import {SummaryInfoIcon} from '@assets';

export const SummaryTotal = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.total}>Total: </Text>
        <SummaryInfoIcon />
      </View>
      <View>
        <Text style={styles.price}>1.990.000 vnđ</Text>
      </View>
    </View>
  );
};
