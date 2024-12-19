import {COLORS, wp} from '@enums';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    borderWidth: 0.5,
    // paddingVertical: 20,
    // paddingHorizontal: 60,
    // width: wp(85),
    // height: hp(13),
    borderColor: '#B3BABF',
    paddingVertical: 25,
    width: '100%',
    padding: 25,
  },
  class_con: {
    borderBottomWidth: 0.5,
    borderColor: '#B3BABF',
  },
  class: {
    flexDirection: 'row',
  },
  depart: {
    borderBottomWidth: 0.5,
    borderColor: '#B3BABF',
  },
  small_text: {
    color: '#344655',
    // fontWeight: '200',
    fontSize: wp(2.5),
    // marginTop: 2,
  },
  heading_text: {
    color: COLORS.textcolor,
    fontSize: wp(4),
    fontWeight: 'bold',
  },
  medium_text: {
    color: COLORS.textcolorlight,
    fontWeight: '300',
  },
  heading: {
    color: COLORS.green,
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
