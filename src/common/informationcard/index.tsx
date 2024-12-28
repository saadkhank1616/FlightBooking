import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './style';
import {ProfileInformationIcon, RightIcon} from '@assets';
import {Spacer} from '@common/spacer';
import {wp} from '@enums';

export const InformationCard = ({icon, title, person, onPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.rowlines}>
          <View style={styles.icon}>{icon}</View>
          <Spacer width={wp(4)} />
          <View>
            <Text style={styles.titletext}>{title}</Text>
          </View>
          <Spacer width={wp(2)} />
          <View>
            <Text>{person}</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={onPress}>
            <RightIcon />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
