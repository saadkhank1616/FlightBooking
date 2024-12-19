import {COLORS} from '@enums';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.green,
    paddingVertical: 90,
    // borderRadius: 10,
    flexDirection: 'row',
    gap: 30,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  text: {
    color: 'white',
    fontWeight: '300',
  },
  tabContainer: {
    alignItems: 'flex-start', // Center text and underline
  },
  underline: {
    height: 2, // Thickness of the underline
    width: 25, // Width of the underline (adjust as needed)
    backgroundColor: '#FFFFFF', // Underline color
    marginTop: 5, // Space between the text and underline
  },
});
