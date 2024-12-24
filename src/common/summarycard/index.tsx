import {Text, View} from 'react-native';
import React from 'react';
import {styles} from './style';
import {SUmmaryCartIcon, SummaryUmbrellaIocn, SummaryWeightIocn} from '@assets';
import {Spacer} from '@common/spacer';
import {wp} from '@enums';

export const SummaryCard = () => {
  return (
    <View style={styles.container}>
      <Text>Convenient:</Text>
      <Spacer width={wp(2)} />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <SummaryWeightIocn />
        <Spacer width={wp(2)} />
        <Text style={styles.smalltext}>07 kg</Text>
      </View>
      <Spacer width={wp(13)} />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <SUmmaryCartIcon />
        <Spacer width={wp(2)} />
        <Text style={styles.smalltext}>20 kg</Text>
      </View>
      <Spacer width={wp(13)} />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <SummaryUmbrellaIocn />
        <Spacer width={wp(2)} />
        <Text style={styles.smalltext}>Umberlla</Text>
      </View>
    </View>
  );
};
