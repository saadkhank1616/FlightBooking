import {Text, View} from 'react-native';
import React from 'react';
import {styles} from './style';
import {
  BookinRoundIcon,
  ListAeroplaeneIcon,
  ListFromIcon,
  ListToIcon,
} from '@assets';
import {Spacer} from '@common/spacer';
import {hp} from '@enums';

export const MyBookingCard = ({icon}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.codefrom}>SGN</Text>
        <ListFromIcon />
        <View style={styles.lineWrapper}>
          <View style={styles.dottedLine} />
          <View style={styles.airplaneIcon}>{icon}</View>
        </View>
        <ListToIcon />
        <Text style={styles.codeto}>HAN</Text>
      </View>
      <Spacer height={hp(0.5)} />
      <View style={styles.timeSection}>
        <Text style={styles.city}>Ho chi minh</Text>
        <Text style={styles.city}>Ha noi</Text>
      </View>
    </View>
  );
};
