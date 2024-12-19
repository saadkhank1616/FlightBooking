import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
// import {ArrowLeft, BackArrow} from '@assets';
// import {Spacer} from '@common/spacer';
// import {wp} from '@enums';
import {styles} from './style';

export const Header = ({heading, onPress, icon, Backarrow}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onPress}>{Backarrow}</TouchableOpacity>
      {/* <Spacer width={wp(30)} /> */}
      <Text style={styles.header_text}>{heading}</Text>
      <View>{icon}</View>
    </View>
  );
};
