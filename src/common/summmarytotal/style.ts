import {COLORS, wp} from '@enums';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: 'white',
    marginHorizontal: wp(3),
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    color: '#00C48C',
    fontSize: wp(3.5),
  },
  total: {
    color: COLORS.textcolor,
  },
});
