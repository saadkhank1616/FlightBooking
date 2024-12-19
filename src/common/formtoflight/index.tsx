import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './style';
import {
  AirdownIcon,
  AirLinesIcon,
  AirupIcon,
  RefreshIcon,
  UnderLine,
} from '@assets';
import {Spacer} from '@common/spacer';
import {hp} from '@enums';

export const FormToFlight = () => {
  return (
    <View style={styles.container}>
      <View style={styles.icon_con}>
        <AirupIcon />
        <AirLinesIcon />
        <AirdownIcon />
      </View>
      <View style={styles.text_con}>
        <View>
          <Text style={styles.text}>From</Text>
          <Text style={styles.heading_text}>Ho chi minh</Text>
          <Text style={styles.to_text}>tan son nahut(sgn)</Text>
        </View>
        <Spacer height={hp(2)} />
        <UnderLine />
        <Spacer height={hp(2)} />
        <View>
          <Text style={styles.text}>To</Text>
          <Text style={styles.heading_text}>Ho chin minh</Text>
          <Text style={styles.to_text}>tan son nahut(sgn)</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.refresh}>
        <RefreshIcon />
      </TouchableOpacity>
    </View>
  );
};
