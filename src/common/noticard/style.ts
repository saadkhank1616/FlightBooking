import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: 'white',
    flexDirection: 'row',
    marginHorizontal: 10,
    borderRadius: 10,
    alignItems: 'center',
    gap: 20,
    marginBottom: 10, // Add some space between cards
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
  },
});
