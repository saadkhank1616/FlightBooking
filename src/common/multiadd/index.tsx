import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './style';
import {ClassIcon, CrossIcon, RefreshSmallIcon} from '@assets';
import {Spacer} from '@common/spacer';
import {DepartInput} from '@common/departinput';
import {hp, wp} from '@enums';

export const MultiAddCard = ({flight}) => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.heading}>{flight.flightNumber}</Text>
        <TouchableOpacity>
          <CrossIcon />
        </TouchableOpacity>
      </View>
      <Spacer />
      <View style={styles.container}>
        <View>
          <Text style={styles.small_text}>From</Text>
          <Text style={styles.heading_text}>{flight.from.city}</Text>
          <Text style={styles.medium_text}>{flight.from.code}</Text>
        </View>
        <View>
          <RefreshSmallIcon />
        </View>
        <View>
          <Text style={styles.small_text}>To</Text>
          <Text style={styles.heading_text}>{flight.to.city}</Text>
          <Text style={styles.medium_text}>{flight.to.code}</Text>
        </View>
      </View>
      <Spacer />
      <View style={styles.depart}>
        <DepartInput
          text="Depart"
          placeholder={flight.depart}
          onPress={() => console.log('pressed')}
        />
      </View>
      <Spacer />
      <View style={styles.class_con}>
        <Text>Class</Text>
        <Spacer />
        <View style={styles.class}>
          <ClassIcon />
          <Spacer width={wp(2)} />
          <Text>{flight.class}</Text>
        </View>
      </View>
      <Spacer height={hp(2)} />
    </View>
  );
};
