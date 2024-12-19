import {View} from 'react-native';
import React from 'react';
import {Button} from '@common/button';
import {styles} from './style';

export const Footer = ({title, onPress}) => {
  return (
    <View style={styles.footer}>
      <Button title={title} onPress={onPress} />
    </View>
  );
};
