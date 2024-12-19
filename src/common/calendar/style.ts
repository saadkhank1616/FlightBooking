import {hp, wp} from '@enums';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    // paddingTop: 10,
    // paddingTop: 80,
    // paddingVertical: 112,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginBottom: 50,
    // marginTop: -20,
  },
  monthText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#00579A',
  },
  navButtons: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 30,
    borderWidth: 1,
    alignItems: 'center',
    // paddingHorizontal: 30,
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  navButton: {
    marginHorizontal: 10,
    // padding: 6,
    // borderRadius: 5,
    // backgroundColor: '#ddd',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  input: {
    flex: 0.48,
    padding: 10,
    borderRadius: 5,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    // backgroundColor: '#f9f9f9',
  },
  inputLabel: {
    fontSize: 14,
    color: '#344655',
    marginBottom: 5,
  },
  inputText: {
    fontSize: 16,
    color: '#344655',
  },
  weekContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  weekDay: {
    fontSize: 14,
    fontWeight: '600',
    color: '#344655',
    width: '14%',
    textAlign: 'center',
  },
  calendarGrid: {
    alignItems: 'center',
  },
  day: {
    width: wp(12),
    height: hp(5.4),
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
    borderRadius: 20,
    // backgroundColor: '#f4f4f4',
  },
  dayText: {
    fontSize: 14,
    color: '#344655',
  },
  roundTripContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  roundTripText: {
    fontSize: 16,
    color: '#344655',
  },
  switchContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    elevation: 8, // For Android shadow
    borderRadius: 20, // To make the shadow wrap the switch neatly
    backgroundColor: 'transparent', // Ensure it's transparent for proper shadow
    padding: 2,
  },
  switch: {
    // padding: 2,
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: {width: 0, height: 2}, // Shadow for iOS
    shadowOpacity: 0.2, // Shadow for iOS
    shadowRadius: 5, // Shadow for iOS
    elevation: 5, // Shadow for Android
  },
  label: {
    fontSize: 8,
    color: 'white',
    marginTop: 2,
    textAlign: 'center',
  },
});
