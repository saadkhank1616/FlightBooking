import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'white',
    paddingVertical: 25,
    paddingHorizontal: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute', // Makes the footer fixed
    bottom: 0, // Anchors the footer to the bottom
    left: 0, // Ensures it stretches across the screen
    right: 0, // Ensures it stretches across the screen
    zIndex: 10, // Ensures the footer appears above other content
  },
});
