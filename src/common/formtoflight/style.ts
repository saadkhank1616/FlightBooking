import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    borderWidth: 0.5,
    borderRadius: 20,
    // padding: 20,
    // paddingVertical: 50,
    // paddingHorizontal: 100,
    paddingLeft: 20,
    paddingTop: 20,
    paddingRight: 30,
    paddingBottom: 30,
    gap: 30,
    // padding: 20,
    borderColor: '#B3BABF',
  },
  icon_con: {
    alignItems: 'center',
    gap: 5,
  },
  text_con: {
    // marginBottom: 10,
  },
  text: {
    color: '#344655',
    fontSize: 12,
  },
  heading_text: {
    color: '#022541',
    fontWeight: 'bold',
    fontSize: 24,
  },
  to_text: {
    color: '#344655',
    fontWeight: '300',
  },
  refresh: {
    // position: 'absolute',
    // right: 20, // Adjust as needed
    // top: 20, // Adjust as needed
    backgroundColor: '#fff', // Ensure the shadow is visible
    borderRadius: 50, // Make it circular if desired
    // padding: 1, // Add padding for better spacing
    // Shadow for Android
    elevation: 5,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
