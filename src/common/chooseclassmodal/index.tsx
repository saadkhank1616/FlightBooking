import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {CorrectIcon} from '@assets';
import {Spacer} from '@common/spacer';
import {Button} from '@common/button';

export const ChooseClassModal = ({onPress}) => {
  const [selectedClass, setSelectedClass] = useState(null);

  const classes = ['Economy', 'Business', 'First Class'];

  return (
    <View style={styles.container}>
      <Spacer />
      <Text style={styles.headerText}>Choose Class</Text>
      <Spacer />
      {classes.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.optionContainer}
          onPress={() => setSelectedClass(item)}>
          <Text style={styles.classText}>{item}</Text>
          <View style={styles.circle}>
            {selectedClass === item && <CorrectIcon />}
          </View>
        </TouchableOpacity>
      ))}
      <Spacer />
      <Button title="Done" onPress={onPress} />
      <Spacer />
    </View>
  );
};
