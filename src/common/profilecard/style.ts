import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
  },
  iconCon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'white', // Change background color to white
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: {width: 0, height: 2}, // Shadow offset for iOS
    shadowOpacity: 0.2, // Shadow opacity for iOS
    shadowRadius: 3, // Shadow radius for iOS
    elevation: 5, // Shadow for Android
  },
  text: {
    // fontWeight: '300',
    color: 'black',
  },
});
