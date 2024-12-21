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
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null); // Track the selected Extracard
  const navigation = useNavigation();
  const [pan] = useState(new Animated.ValueXY()); // Animated value for pan gesture

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
          <Text style={{color: 'white'}}>Are you sure you want to delete?</Text>
          <TouchableOpacity onPress={() => setIsModalVisible(false)}>
            <Text>Close</Text>
          </TouchableOpacity>
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
    backgroundColor: 'red',
  },
});
