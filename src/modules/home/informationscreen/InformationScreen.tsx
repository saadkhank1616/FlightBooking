import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, hp, SCREEN} from '@enums';
import {Header} from '@common/header';
import {
  BackArrow,
  GrayInformationIcon,
  InfoIcon,
  LineInformationIcon,
  ProfileInformationIcon,
  YellowInformationIcon,
} from '@assets';
import {useNavigation} from '@react-navigation/native';
import {Footer, InformationCard, Spacer} from '@common';

const InformationScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
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
          <Text style={styles.headingtext}>Step 1: customer information</Text>
        </View>
        <Spacer />
        <InformationCard
          icon={<ProfileInformationIcon />}
          title="Customer 1"
          person="(Adult)"
          onPress={() => navigation.navigate(SCREEN.CustomerInformation)}
        />
        <Spacer height={hp(2)} />
        <InformationCard
          icon={<ProfileInformationIcon />}
          title="Mr. Matthew Nguyen"
          person="(Adult)"
        />
        <Spacer height={hp(2)} />
        <Text style={styles.headingtext}>Contact</Text>
        <Spacer height={hp(2)} />
        <InformationCard
          icon={<ProfileInformationIcon />}
          title="Chiennv.pixelz@gmail.com"
          onPress={() => navigation.navigate(SCREEN.InformationContact)}
        />
      </View>
      <Footer title="Next" />
    </View>
  );
};

export default InformationScreen;

const styles = StyleSheet.create({
  container: {
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
