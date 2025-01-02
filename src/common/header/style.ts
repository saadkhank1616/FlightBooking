import {COLORS} from '@enums';
import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 30,
    paddingHorizontal: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'space-between',
    // width: '100%',
    alignItems: 'center',
    // marginHorizontal: 10,
  },
  header_text: {
    fontSize: 20,
    color: COLORS.textcolor,
    fontWeight: 'bold',
  },
});
