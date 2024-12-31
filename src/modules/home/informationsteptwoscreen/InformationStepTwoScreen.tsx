import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, hp, SCREEN} from '@enums';
import {Header} from '@common/header';
import {
  BackArrow,
  CrownIcon,
  EatingIcon,
  GrayInformationIcon,
  InfoIcon,
  LineInformationIcon,
  LugaggeIcon,
  YellowInformationIcon,
} from '@assets';
import {useNavigation} from '@react-navigation/native';
import {Footer, InformationCard, Spacer} from '@common';

const InformationStepTwoScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.conatiner}>
      <Header
        heading="information"
        Backarrow={<BackArrow />}
        icon={<InfoIcon />}
        onPress={() => navigation.goBack()}
      />
      <Spacer />
      <View style={styles.innerContainer}>
        <View style={styles.row}>
          <YellowInformationIcon />
          <LineInformationIcon />
          <GrayInformationIcon />
          <LineInformationIcon />
          <GrayInformationIcon />
        </View>
        <Spacer />
        <View>
          <Text style={styles.headingtext}>Step 2: Convenient</Text>
        </View>
        <Spacer />
        <InformationCard
          icon={<LugaggeIcon />}
          title="Buy luggage"
          person="(Alraedy)"
          onPress={() => navigation.navigate(SCREEN.BuyLugagge)}
        />
        <Spacer height={hp(2)} />
        <InformationCard
          icon={<EatingIcon />}
          title="Eating"
          person=""
          onPress={() => navigation.navigate(SCREEN.EatingScreen)}
        />
        <Spacer height={hp(2)} />
        <InformationCard
          icon={<CrownIcon />}
          title="Business lounge"
          onPress={() => navigation.navigate(SCREEN.BussinesLongue)}
        />
      </View>
      <Footer title="Next" />
    </View>
  );
};

export default InformationStepTwoScreen;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: COLORS.BackGround,
  },
  innerContainer: {
    padding: 5,
    marginHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headingtext: {
    fontWeight: 'bold',
  },
});
