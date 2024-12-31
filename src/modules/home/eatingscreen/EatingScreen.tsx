import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {COLORS, hp} from '@enums';
import {Header} from '@common/header';
import {ArrowLeft, ListAeroplaeneIcon} from '@assets';
import {
  CustomModal,
  EatingModal,
  LuggageModal,
  MyBookingCard,
  Spacer,
} from '@common';
import {useNavigation} from '@react-navigation/native';

const EatingScreen = () => {
  const navigation = useNavigation();
  const [isModal, setIsModal] = useState(false);

  return (
    <View style={styles.container}>
      <Header
        heading="Eating"
        Backarrow={<ArrowLeft />}
        onPress={() => navigation.goBack()}
      />
      <Spacer height={hp(2)} />
      <View style={styles.innerContainer}>
        <Text style={styles.customerText}>Customer 1: Matthew</Text>
        <Spacer height={hp(2)} />
        <MyBookingCard
          icon={<ListAeroplaeneIcon />}
          onPress={() => setIsModal(true)}
        />
        <Spacer height={hp(2)} />
        <MyBookingCard icon={<ListAeroplaeneIcon />} />
      </View>

      {/* Modal */}
      <CustomModal visible={isModal}>
        <EatingModal onPress={() => setIsModal(false)} />
      </CustomModal>
    </View>
  );
};

export default EatingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BackGround,
  },
  innerContainer: {
    marginHorizontal: 10,
  },
  customerText: {
    color: COLORS.TextPrimary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    // padding: 20,
  },
});
