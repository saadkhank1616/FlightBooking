import {Text, View} from 'react-native';
import React from 'react';
import {styles} from './style';
import {ListAeroplaeneIcon, ListFromIcon, ListToIcon} from '@assets'; // Assuming ListAeroplaeneIcon is the airplane icon.
import {Spacer} from '@common/spacer';
import {hp} from '@enums';

export const ListCard = () => {
  return (
    <View style={styles.container}>
      {/* From and To Section */}
      <View style={styles.row}>
        {/* From Section */}
        <View style={styles.column}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.code}>SGN</Text>
            <ListFromIcon />
          </View>
          <Text style={styles.city}>Ho Chi Minh</Text>
        </View>

        {/* Line and Airplane Icon */}
        <View style={styles.lineWrapper}>
          <View style={styles.dottedLine} />
          <ListAeroplaeneIcon style={styles.airplaneIcon} />
          <Spacer height={hp(4)} />
          <Text style={styles.duration}>1h 45m</Text>
        </View>

        {/* To Section */}
        <View style={styles.column}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <ListToIcon />
            <Text style={styles.code}>SGN</Text>
          </View>
          <Text style={styles.city}>Ha Noi</Text>
        </View>
      </View>

      {/* Duration and Non-stop */}
      {/* <View style={styles.centerContent}>
        <Text style={styles.duration}>1h 45m</Text>
        <Text style={styles.nonStop}>Non stop</Text>
      </View> */}

      {/* Time and Date Section */}
      <View style={styles.timeSection}>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.time}>10:00 AM</Text>
            <Text style={styles.date}>18 July, 2020</Text>
          </View>
          <Text style={styles.nonStop}>Non stop</Text>
          <View style={styles.column}>
            <Text style={styles.time}>12:30 PM</Text>
            <Text style={styles.date}>18 July, 2020</Text>
          </View>
        </View>
      </View>

      {/* Divider Line */}
      <View style={styles.dividerLine} />

      {/* Footer Section */}
      <View style={styles.footer}>
        <View style={styles.row}>
          <View style={styles.row}>
            <ListAeroplaeneIcon style={styles.airlineIcon} />
            <Text style={styles.airline}>Vietnam Airlines</Text>
          </View>
          <Text style={styles.price}>2,190,000 VND</Text>
        </View>
      </View>
    </View>
  );
};
