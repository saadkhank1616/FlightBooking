import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, hp} from '@enums';
import {Header} from '@common/header';
import {BackArrow, BookinRoundIcon, ListAeroplaeneIcon} from '@assets';
import {Footer, MyBookingCard, Spacer} from '@common';

const MyBookinScreen = () => {
  return (
    <View style={styles.container}>
      <Header heading="My Booking" Backarrow={<BackArrow />} />
      <Spacer height={hp(2)} />
      <View style={styles.innerContainer}>
        <Text style={styles.roundtext}>Round Trip</Text>
        <Spacer height={hp(2)} />
        <MyBookingCard icon={<BookinRoundIcon />} />
        <Spacer />
        <Text style={styles.roundtext}>One Way</Text>
        <Spacer height={hp(2)} />
        <MyBookingCard icon={<ListAeroplaeneIcon />} />
      </View>
      <Footer title="Add" />
    </View>
  );
};

export default MyBookinScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BackGround,
  },
  innerContainer: {
    marginHorizontal: 15,
  },
  roundtext: {
    color: COLORS.textcolor,
    fontWeight: 'bold',
  },
});
