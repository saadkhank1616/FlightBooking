import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    // Shadow for Android
    elevation: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 5,
  },
  rowlines: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titletext: {
    fontWeight: 'bold',
  },
  persontext: {
    color: '#B3BABF',
  },
});
