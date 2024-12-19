import {StyleSheet, View, Animated, PanResponder} from 'react-native';
import React, {useState} from 'react';
import {Header} from '@common/header';
import {BackArrow, BascetIcon, VisaIcon} from '@assets';
import {useNavigation} from '@react-navigation/native';
import {Spacer} from '@common';
import {COLORS, wp} from '@enums';

const ExtracardScreen = () => {
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

  return (
    <View style={styles.container}>
      <Header
        heading="Extra card"
        Backarrow={<BackArrow />}
        icon={<BascetIcon />}
        onPress={() => navigation.goBack()}
      />
      <Spacer />
      <View style={styles.innerCOntainer}>
        {/* Wrapper for horizontal layout */}
        <View style={styles.row}>
          {/* Wrap each VisaIcon in Animated.View for swipe functionality */}
          <Animated.View
            {...panResponder.panHandlers} // Attach pan responder
            style={[styles.swipeableItem, {transform: [{translateX: pan.x}]}]}>
            <VisaIcon />
          </Animated.View>

          <Animated.View
            {...panResponder.panHandlers}
            style={[styles.swipeableItem, {transform: [{translateX: pan.x}]}]}>
            <VisaIcon />
          </Animated.View>

          <Animated.View
            {...panResponder.panHandlers}
            style={[styles.swipeableItem, {transform: [{translateX: pan.x}]}]}>
            <VisaIcon />
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default ExtracardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BackGround,
  },
  innerCOntainer: {
    marginHorizontal: wp(4),
  },
  row: {
    flexDirection: 'row', // This makes the icons appear in a row
    justifyContent: 'space-between', // Space between items
  },
  swipeableItem: {
    marginRight: 10, // Space between each VisaIcon
  },
});
