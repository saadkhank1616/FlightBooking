import {StyleSheet} from 'react-native';
import {COLORS} from '@enums';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.White,
    padding: 20,
  },
  headerText: {
    color: '#00579A',
    fontSize: 18,
    fontWeight: 'bold',
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  weightPriceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  weightText: {
    color: COLORS.TextPrimary,
    fontSize: 16,
    fontWeight: '500',
  },
  priceText: {
    color: COLORS.SuccessGreen,
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 10,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: COLORS.BorderGray,
    backgroundColor: COLORS.White,
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftCon: {
    alignItems: 'center',
    flexDirection: 'row',
    // justifyContent: 'space-around',
  },
});
