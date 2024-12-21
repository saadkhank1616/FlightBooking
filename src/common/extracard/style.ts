import {COLORS, hp, wp} from '@enums';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  cardContainer: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
  iconContainer: {
    // padding: 5,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    // Shadow for Android
    elevation: 5,
    borderRadius: 5,
    width: wp(8),
    height: hp(3),
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: COLORS.textcolor,
    fontWeight: 'bold',
  },
});
