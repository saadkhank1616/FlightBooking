import {Text, View} from 'react-native';
import React from 'react';
import {styles} from './style';
import {
  ListAeroplaeneIcon,
  ListBookMarkIcon,
  ListFromIcon,
  ListLogoIcon,
  ListToIcon,
} from '@assets';
import {Spacer} from '@common/spacer';
import {hp} from '@enums';

export const CardList = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.codefrom}>{item.fromCode}</Text>
        <ListFromIcon />
        <View style={styles.lineWrapper}>
          <View style={styles.dottedLine} />
          <ListAeroplaeneIcon style={styles.airplaneIcon} />
        </View>
        <ListToIcon />
        <Text style={styles.codeto}>{item.toCode}</Text>
      </View>
      <Spacer height={hp(0.5)} />
      <View style={styles.timeSection}>
        <Text style={styles.city}>{item.fromCity}</Text>
        <Text style={styles.hour}>{item.duration}</Text>
        <Text style={styles.city}>{item.toCity}</Text>
      </View>
      <Spacer height={hp(2.5)} />
      <View style={styles.timeSectionCon}>
        <View>
          <Text style={styles.time}>{item.departureTime}</Text>
          <Spacer height={hp(0.5)} />
          <Text style={styles.date}>{item.departureDate}</Text>
        </View>
        <View>
          <Text style={styles.nonstop}>Non Stop</Text>
        </View>
        <View>
          <Text style={styles.time}>{item.arrivalTime}</Text>
          <Spacer height={hp(0.5)} />
          <Text style={styles.date}>{item.arrivalDate}</Text>
        </View>
      </View>
      <Spacer height={hp(2.5)} />
      <View style={styles.dooted}></View>
      <Spacer height={hp(2.5)} />
      <View style={styles.footer}>
        <View style={styles.logoCon}>
          <View style={styles.logo}>
            <ListLogoIcon />
          </View>
          <Text style={styles.airline}>{item.airline}</Text>
        </View>
        <View style={styles.logoCon}>
          <Text style={styles.price}>{item.price}</Text>
          <View style={styles.Bookmark}>
            <ListBookMarkIcon />
          </View>
        </View>
      </View>
    </View>
  );
};
