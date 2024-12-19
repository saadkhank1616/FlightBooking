import {Text, TextInput, View} from 'react-native';
import React from 'react';
import {styles} from './style';

export const Inputs = ({label, placeholder}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#D9DCDF"
      />
    </View>
  );
};
