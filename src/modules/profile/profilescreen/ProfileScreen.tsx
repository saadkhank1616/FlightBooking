import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Header} from '@common/header';
import {ProfileCard, Spacer} from '@common';
import {
  ContollerIcon,
  DiamondIcon,
  HeadPhoneIcon,
  ProfileImage,
  RightIcon,
} from '@assets';
import {COLORS, hp, SCREEN, wp} from '@enums';
import {useNavigation} from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header heading="Profile" icon="" Backarrow="" onPress="" />
      <Spacer />
      <View style={styles.innerContainer}>
        <Spacer />
        <View style={styles.header}>
          <View>
            <ProfileImage />
          </View>
          <Spacer width={wp(3)} />
          <View>
            <Text style={styles.headingText}>Coldsnap Studio</Text>
            <Spacer height={hp(0.4)} />
            <View style={styles.member}>
              <DiamondIcon />
              <Spacer width={wp(1.8)} />
              <Text style={styles.text}>Gold Member</Text>
            </View>
            <Spacer height={hp(2)} />
          </View>
        </View>
        <Spacer height={hp(2)} />
        <ProfileCard
          text="Persnol data"
          icon={<ContollerIcon />}
          righticon={<RightIcon />}
          onPress={() => navigation.navigate(SCREEN.Persnol)}
        />
        <Spacer height={hp(2)} />
        <ProfileCard
          text="setting"
          icon={<ContollerIcon />}
          righticon={<RightIcon />}
        />
        <Spacer height={hp(2)} />
        <ProfileCard
          text="Extra card"
          icon={<ContollerIcon />}
          righticon={<RightIcon />}
          onPress={() => navigation.navigate(SCREEN.ExtraCard)}
        />
        <Spacer height={hp(2)} />
        <ProfileCard
          text="language"
          icon={<ContollerIcon />}
          righticon={<RightIcon />}
          onPress={() => navigation.navigate(SCREEN.Language)}
        />
        <Spacer height={hp(2)} />
        <ProfileCard
          text="My Booking"
          icon={<ContollerIcon />}
          righticon={<RightIcon />}
        />
        <Spacer height={hp(2)} />
        <ProfileCard
          text="Log out"
          icon={<ContollerIcon />}
          righticon=""
          textColor="#FF5244"
        />
        <Spacer height={hp(5)} />
        <TouchableOpacity style={styles.contact}>
          <HeadPhoneIcon />
          <Spacer width={wp(5)} />
          <Text style={styles.contactText}>
            Do you need support? Contact us!
          </Text>
        </TouchableOpacity>
        <Spacer height={hp(3)} />
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F7F8',
  },
  innerContainer: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  header: {
    flexDirection: 'row',
    // paddingHorizontal: 10,
    borderBottomWidth: 0.5,
    // paddingVertical: 20,
    padding: 10,
  },
  member: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headingText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    color: '#DAA210',
    fontSize: 12,
  },
  contact: {
    backgroundColor: '#DCE3DE',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    // padding: 25,
    borderRadius: 10,
    paddingHorizontal: 25,
    paddingVertical: 25,
    marginHorizontal: wp(2),
  },
  contactText: {
    color: COLORS.green,
    // width: 300,
  },
});
