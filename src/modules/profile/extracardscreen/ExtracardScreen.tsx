import {
  StyleSheet,
  View,
  Animated,
  PanResponder,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Header} from '@common/header';
import {
  BackArrow,
  BascetIcon,
  CreditCardExtraIcon,
  ExtraCardIcon,
  PaypalCardicon,
  VisaCardIcon,
  VisaIcon,
} from '@assets';
import {useNavigation} from '@react-navigation/native';
import {CustomModalDelete, Extracard, Footer, Spacer} from '@common';
import {COLORS, hp, SCREEN, wp} from '@enums';

// Data for Extracard components
const extracardData = [
  {
    id: 'card-1',
    number: '**** **** **** 1239',
    icon: <ExtraCardIcon />,
    cardicon: <VisaCardIcon />,
  },
  {
    id: 'card-2',
    number: '**** **** **** 3002',
    icon: <ExtraCardIcon />,
    cardicon: <VisaCardIcon />,
  },
  {
    id: 'card-3',
    number: 'coldsnapstudio@gmail.com',
    icon: <CreditCardExtraIcon />,
    cardicon: <PaypalCardicon />,
  },
];

const ExtracardScreen = () => {
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null); // Track the selected Extracard
  const navigation = useNavigation();
  const [pan] = useState(new Animated.ValueXY()); // Animated value for pan gesture

  const handelWrong = () => {
    setActiveButton('no');
    setIsModalVisible(false);
  };
  const handelWright = () => {
    setActiveButton('yes');
    setIsModalVisible(false);
  };
  // PanResponder setup
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (e, gestureState) => {
      return Math.abs(gestureState.dx) > 10; // Trigger swipe if horizontal movement is greater than 10
    },
    onPanResponderMove: (e, gestureState) => {
      pan.setValue({x: gestureState.dx, y: 0}); // Update the pan position
    },
    onPanResponderRelease: (e, gestureState) => {
      if (Math.abs(gestureState.dx) > 150) {
        // Swipe threshold (you can adjust the value)
        Animated.spring(pan, {
          toValue: {x: gestureState.dx > 0 ? 200 : -200, y: 0}, // Swipe off the screen
          useNativeDriver: true,
        }).start();
      } else {
        // Reset the position if swipe threshold is not met
        Animated.spring(pan, {
          toValue: {x: 0, y: 0},
          useNativeDriver: true,
        }).start();
      }
    },
  });
  // modal
  // const handelVisible = () => {
  //   // Show the modal instead of immediately navigating
  //   setIsModalVisible(true);
  // };
  return (
    <View style={styles.container}>
      <Header
        heading="Extra card"
        Backarrow={<BackArrow />}
        icon={<BascetIcon />}
        onPress={() => navigation.goBack()}
        deletpress={() => setIsModalVisible(true)}
      />
      <Spacer />
      <View style={styles.innerContainer}>
        {/* Wrapper for horizontal layout */}
        <Animated.View
          {...panResponder.panHandlers} // Attach PanResponder here
          style={[styles.row, {transform: [{translateX: pan.x}]}]} // Apply pan animation
        >
          {/* Static Visa Icons */}
          <VisaIcon />
          <VisaIcon />
          <VisaIcon />
        </Animated.View>
        <Spacer />
        <Text style={styles.text}>CREDIT CARD</Text>
        <Spacer height={hp(2)} />
        {/* FlatList for Extracard components */}
        <FlatList
          data={extracardData}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View>
              <Extracard
                number={item.number}
                icon={item.icon}
                cardicon={item.cardicon}
                isPressed={selectedCard === item.id} // Apply border conditionally
                setIsPressed={() => setSelectedCard(item.id)} // Update the selected card
              />
              <Spacer height={hp(2)} />
            </View>
          )}
        />
      </View>
      <CustomModalDelete
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)} // Hides the modal on close
      >
        <View style={styles.modaldelte}>
          <Text style={styles.notitext}>Notfication</Text>
          <Spacer />
          <Text style={styles.deletText}>You want delete credit card?</Text>
          <Spacer height={hp(2)} />
          <View style={styles.deleteModalBtn}>
            <TouchableOpacity
              onPress={handelWrong}
              style={[
                styles.wrongBtn,
                activeButton === 'no' && styles.activeBtn,
              ]}>
              <Text
                style={[
                  styles.btnText,
                  activeButton === 'no' && styles.activeBtnText,
                ]}>
                No, I’m wrong
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handelWright}
              style={[
                styles.wrongBtn,
                activeButton === 'yes' && styles.activeBtn,
              ]}>
              <Text
                style={[
                  styles.btnText,
                  activeButton === 'yes' && styles.activeBtnText,
                ]}>
                Yes, 100%?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </CustomModalDelete>

      <Footer
        title="Add new card"
        onPress={() => navigation.navigate(SCREEN.ExtraCardAdd)}
      />
    </View>
  );
};

export default ExtracardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BackGround,
  },
  innerContainer: {
    marginHorizontal: wp(4),
  },
  row: {
    flexDirection: 'row', // This makes the icons appear in a row
    justifyContent: 'space-between', // Space between items
  },
  text: {
    color: COLORS.textcolor,
    fontWeight: 'bold',
  },
  modaldelte: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    // padding: 10,
    borderRadius: 10,
    marginHorizontal: 20,
    paddingVertical: 25,
  },
  deletmoadlbtn: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
  },
  deleteModalBtn: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
  },
  wrongBtn: {
    // backgroundColor: '#4F755B',
    paddingHorizontal: 40,
    borderRadius: 5,
    paddingVertical: 10,
  },
  notitext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#022541',
  },
  deleteText: {
    fontSize: 16,
    color: '#022541',
  },
  btnText: {
    fontSize: 16,
    color: '#4F755B',
    fontWeight: 'bold',
  },
  activeBtn: {
    backgroundColor: '#4F755B', // New background color for active button
  },
  activeBtnText: {
    color: 'white', // Text color for active button
  },
  deletText: {
    fontSize: 16,
    color: '#022541',
  },
});
