import {COLORS, wp, hp} from '@enums'; // Ensure wp and hp are imported
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: wp(4), // Using wp for padding to adjust it responsively
    marginVertical: hp(1.5), // Using hp for vertical margin to adjust it responsively
    marginHorizontal: wp(3), // Using wp for horizontal margin to adjust it responsively
  },
  row: {
    flexDirection: 'row',
    gap: wp(3), // Responsive gap between elements
    alignItems: 'center',
  },
  lineWrapper: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dottedLine: {
    width: '100%',
    height: 1,
    borderStyle: 'dotted',
    borderWidth: 1,
    borderColor: '#ddd',
    position: 'absolute',
  },
  airplaneIcon: {
    backgroundColor: 'white',
    position: 'absolute',
    zIndex: 1,
  },
  timeSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  column: {
    alignItems: 'center',
  },
  timeSectionCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dooted: {
    borderBottomWidth: 1,
    borderStyle: 'dotted',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: wp(6), // Using wp to control width responsively
    height: wp(6), // Using wp to control height responsively
    borderRadius: wp(3), // Using wp for borderRadius for consistency in responsiveness
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Bookmark: {
    width: wp(6), // Same here for the Bookmark icon size
    height: wp(6),
    borderRadius: wp(3),
    backgroundColor: COLORS.green,
    alignItems: 'center',
    justifyContent: 'center',
  },
  codefrom: {
    fontSize: wp(4), // Adjusting font size based on screen width
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  codeto: {
    fontSize: wp(4),
    fontWeight: 'bold',
    color: COLORS.green,
  },
  city: {
    fontSize: wp(3),
    color: '#666',
  },
  time: {
    fontSize: wp(4),
    fontWeight: 'bold',
    color: '#333',
  },
  date: {
    fontSize: wp(3.5),
    color: '#999',
  },
  price: {
    fontSize: wp(3.5), // Responsive font size
    fontWeight: 'bold',
    color: '#00C48C',
    marginRight: wp(3), // Adjusting right margin responsively
  },
  airline: {
    fontSize: wp(3.5),
    marginLeft: wp(2), // Responsive left margin
    color: '#333',
  },
  nonstop: {
    color: '#2F80ED',
  },
  hour: {
    fontSize: wp(3),
    color: '#666',
  },
});
