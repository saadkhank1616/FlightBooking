import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './style';
import {Spacer} from '@common/spacer';
import {COLORS, wp} from '@enums';

export const Extracard = ({
  number,
  icon,
  cardicon,
  isPressed,
  setIsPressed,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.cardContainer,
        isPressed && {borderColor: COLORS.primary, borderWidth: 2},
      ]}
      onPress={setIsPressed}>
      <View style={styles.iconRow}>
        <View style={styles.iconContainer}>{icon}</View>
        <Spacer width={wp(3)} />
        <View>
          <Text style={styles.text}>{number}</Text>
        </View>
      </View>
      <View>{cardicon}</View>
    </TouchableOpacity>
  );
};

// const styles = StyleSheet.create({
//   cardContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 20,
//     borderRadius: 8,
//     // borderWidth: 1,
//     // borderColor: 'gray', // Default border color
//     backgroundColor: 'white',
//   },
//   iconContainer: {
//     // marginHorizontal: 10,
//   },
//   textContainer: {
//     flex: 1,
//   },
// });
