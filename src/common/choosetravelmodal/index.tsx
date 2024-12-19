import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {Spacer} from '@common/spacer';
import {hp, wp} from '@enums';
import {Button} from '@common/button';

export const ChooseTravelModal = ({onPress}) => {
  // State for each category
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [babies, setBabies] = useState(0);
  const [luggage, setLuggage] = useState(0);

  // Helper functions to handle increment and decrement
  const increment = (setter, value) => setter(value + 1);
  const decrement = (setter, value) => setter(value > 0 ? value - 1 : 0);

  return (
    <View style={styles.container}>
      <Spacer height={hp(2)} />
      <Text style={styles.headerText}>Choose Travellers</Text>
      <Spacer height={hp(3)} />

      {/* Adults */}
      <View style={styles.text_con}>
        <View style={styles.text_con_inner}>
          <Text style={styles.headingText}>Adults</Text>
          <Spacer width={wp(1)} />
          <Text style={styles.year}>(16y +)</Text>
        </View>
        <View style={styles.textCon}>
          <TouchableOpacity
            style={styles.circle}
            onPress={() => decrement(setAdults, adults)}>
            <Text>-</Text>
          </TouchableOpacity>
          <Text>{adults}</Text>
          <TouchableOpacity
            style={styles.circle}
            onPress={() => increment(setAdults, adults)}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Spacer height={hp(3)} />

      {/* Children */}
      <View style={styles.text_con}>
        <View style={styles.text_con_inner}>
          <Text style={styles.headingText}>Children</Text>
          <Spacer width={wp(1)} />
          <Text style={styles.year}>(2y - 16y)</Text>
        </View>
        <View style={styles.textCon}>
          <TouchableOpacity
            style={styles.circle}
            onPress={() => decrement(setChildren, children)}>
            <Text>-</Text>
          </TouchableOpacity>
          <Text>{children}</Text>
          <TouchableOpacity
            style={styles.circle}
            onPress={() => increment(setChildren, children)}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Spacer height={hp(3)} />

      {/* Babies */}
      <View style={styles.text_con}>
        <View style={styles.text_con_inner}>
          <Text style={styles.headingText}>Babies</Text>
          <Spacer width={wp(1)} />
          <Text style={styles.year}>(below 2y)</Text>
        </View>
        <View style={styles.textCon}>
          <TouchableOpacity
            style={styles.circle}
            onPress={() => decrement(setBabies, babies)}>
            <Text>-</Text>
          </TouchableOpacity>
          <Text>{babies}</Text>
          <TouchableOpacity
            style={styles.circle}
            onPress={() => increment(setBabies, babies)}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Spacer height={hp(3)} />

      {/* Luggage */}
      <View style={styles.text_con}>
        <View style={styles.text_con_inner}>
          <Text style={styles.headingText}>Luggage</Text>
          <Spacer width={wp(1)} />
          <Text style={styles.year}>(Kg)</Text>
        </View>
        <View style={styles.textCon}>
          <TouchableOpacity
            style={styles.circle}
            onPress={() => decrement(setLuggage, luggage)}>
            <Text>-</Text>
          </TouchableOpacity>
          <Text>{luggage}</Text>
          <TouchableOpacity
            style={styles.circle}
            onPress={() => increment(setLuggage, luggage)}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Spacer height={hp(5)} />
      <Button title="Done" onPress={onPress} />
      <Spacer height={hp(2)} />
    </View>
  );
};
