import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './style';
import {BlackCalendarIcon} from '@assets';

export const DepartInput = ({text, onPress, placeholder}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.icon_con}>
        <BlackCalendarIcon />
        <TextInput placeholder={placeholder} />
      </View>
    </TouchableOpacity>
  );
};
