import {COLORS, wp} from '@enums';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  text_con: {
    flexDirection: 'row',
    // gap: 10,
    justifyContent: 'space-between',
  },
  text_con_inner: {
    flexDirection: 'row',
    alignItems: 'center',
    // gap: 10,
  },
  circle: {
    backgroundColor: '#F2F7F8',
    borderRadius: 30,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  headingText: {
    color: COLORS.textcolor,
    fontWeight: 'bold',
    fontSize: 16,
  },
  year: {
    fontSize: 16,
    color: COLORS.textcolorlight,
    fontWeight: '400',
  },
  headerText: {
    color: '#00579A',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textCon: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(5),
  },
});
