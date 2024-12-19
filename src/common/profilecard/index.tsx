import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './style';
import {Spacer} from '@common/spacer';
import {wp} from '@enums';

export const ProfileCard = ({
  text,
  icon,
  onPress,
  righticon,
  textColor = 'black',
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconCon}>
        <View style={styles.icon}>{icon}</View>
        <Spacer width={wp(3)} />
        <Text style={[styles.text, {color: textColor}]}>{text}</Text>
      </View>
      <TouchableOpacity onPress={onPress}>{righticon}</TouchableOpacity>
    </View>
  );
};
