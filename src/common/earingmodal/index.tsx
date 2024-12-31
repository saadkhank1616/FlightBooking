import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Spacer} from '@common/spacer';
import {Button} from '@common/button';
import {styles} from './style';
import {CorrectIcon} from '@assets';
import {wp} from '@enums';

export const EatingModal = ({onPress}) => {
  const [selectedWeight, setSelectedWeight] = useState(null);

  const luggageOptions = [
    {weight: 'Mytom', price: '49.000 vnd'},
    {weight: 'Xoi lac vung', price: '199.000 vnd'},
    {weight: 'Gicungdc', price: '299.000 vnd'},
  ];

  return (
    <View style={styles.container}>
      <Spacer />
      <Text style={styles.headerText}>Buy luggage (SGN - HAN)</Text>
      <Spacer />
      {luggageOptions.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.optionContainer}
          onPress={() => setSelectedWeight(option.weight)}>
          <View style={styles.weightPriceContainer}>
            <Text style={styles.weightText}>{option.weight}</Text>
          </View>
          <View style={styles.leftCon}>
            <Text style={styles.priceText}>{`+${option.price}`}</Text>
            <Spacer width={wp(3)} />
            <View style={styles.circle}>
              {selectedWeight === option.weight && <CorrectIcon />}
            </View>
          </View>
        </TouchableOpacity>
      ))}
      <Spacer />
      <Button title="Done" onPress={onPress} />
      <Spacer />
    </View>
  );
};
