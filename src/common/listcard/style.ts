import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#ddd',
    // paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  column: {
    // alignItems: 'center',
  },
  code: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  city: {
    fontSize: 14,
    color: '#666',
  },
  lineWrapper: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
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
  centerContent: {
    alignItems: 'center',
    // marginTop: 10,
  },
  duration: {
    fontSize: 14,
    color: '#333',
    marginVertical: 5,
  },
  nonStop: {
    fontSize: 12,
    color: '#007bff',
  },
  timeSection: {
    marginTop: 15,
  },
  time: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  date: {
    fontSize: 12,
    color: '#999',
  },
  dividerLine: {
    width: '100%',
    height: 0,
    borderWidth: 1,
    borderStyle: 'dotted', // Makes the line dotted
    borderColor: '#ddd', // Color of the dotted line
    marginVertical: 15, // Spacing around the line
  },
  footer: {
    marginTop: 15,
  },
  airline: {
    fontSize: 16,
    marginLeft: 10,
    color: '#333',
  },
  airlineIcon: {
    width: 24,
    height: 24,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00b300',
  },
});
