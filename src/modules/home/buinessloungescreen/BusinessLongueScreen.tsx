import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS, hp} from '@enums';
import {Header} from '@common/header';
import {ArrowLeft, ListAeroplaeneIcon} from '@assets';
import {CustomModal, LongueModal, MyBookingCard, Spacer} from '@common';
import {useNavigation} from '@react-navigation/native';

const BusinessLongueScreen = () => {
  const navigation = useNavigation();
  const [isModal, setIsModal] = useState(false);
  return (
    <View style={styles.container}>
      <Header
        heading="Bussines longue"
        Backarrow={<ArrowLeft />}
        onPress={() => navigation.goBack()}
      />
      <Spacer height={hp(2)} />
      <View style={styles.innerContainer}>
        <Text>Customer 1: Matthew</Text>
        <Spacer height={hp(2)} />
        <MyBookingCard
          icon={<ListAeroplaeneIcon />}
          onPress={() => setIsModal(true)}
        />
        <Spacer height={hp(2)} />
        <MyBookingCard icon={<ListAeroplaeneIcon />} />
      </View>
      <CustomModal visible={isModal}>
        <LongueModal onPress={() => setIsModal(false)} />
      </CustomModal>
    </View>
  );
};

export default BusinessLongueScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BackGround,
  },
  innerContainer: {
    marginHorizontal: 10,
  },
});
