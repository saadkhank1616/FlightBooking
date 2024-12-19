import {wp} from '@enums';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    // padding: wp(2), // Add padding if needed
    // paddingHorizontal: wp(4),
  },
  label: {
    fontSize: wp(3.5),
    marginBottom: 8, // Spacing between label and input
    color: '#344655',
  },
  input: {
    borderBottomWidth: 0.5, // Underline
    borderBottomColor: '#B3BABF', // Customize underline color
    fontSize: wp(3.5),
    // paddingVertical: 4, // Adjust vertical padding
    color: '#022541',
    fontWeight: 'semibold',
  },
});
