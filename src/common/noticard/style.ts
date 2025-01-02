import {wp} from '@enums';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: 'white',
    flexDirection: 'row',
    marginHorizontal: 10,
    borderRadius: 10,
    // alignItems: 'center',
    gap: 20,
    marginBottom: 10, // Add some space between cards
    // justifyContent: 'center',
  },
  textContainer: {
    flexDirection: 'row',
    // gap: 170,
    justifyContent: 'space-between', // Ensure the time and title are spaced properly
    width: '90%',
  },
  innerContainer: {
    // flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    // width: '100%',
  },
  airlines: {
    color: '#022541',
    fontSize: 14,
  },
  text: {
    color: '#022541',
    width: wp(55),
  },
  //
  buttonContainer: {
    flexDirection: 'row',
    // justifyContent: 'flex-end',
    marginTop: 10,
  },
  updateButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 45,
    borderRadius: 10,
    backgroundColor: '#4F755B', // Green color
  },
  notNowButton: {
    backgroundColor: 'white', // Light background
    borderWidth: 1,
    borderColor: '#CCCCCC', // Gray border
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  notNowText: {
    color: '#333333', // Darker text for "Not Now"
  },
  buttonCheck: {
    paddingVertical: 6,
    paddingHorizontal: 125,
    borderRadius: 10,
    backgroundColor: '#4F755B',
  },
});
