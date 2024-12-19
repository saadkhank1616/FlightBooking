import {StyleSheet} from 'react-native';
import {COLORS, hp, wp} from '@enums';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    position: 'absolute',
    top: hp(3), // Adjusted from 30 for proportional scaling
    width: wp(90), // Ensure it's responsive
    flexDirection: 'row',
    justifyContent: 'space-between', // Pushes back and skip buttons to their sides
    alignItems: 'center',
  },
  backButtonContainer: {
    justifyContent: 'flex-start',
  },
  skipText: {
    color: 'white',
    fontSize: wp(4.2), // Adjusted for better scalability
    fontWeight: 'bold',
    marginLeft: 'auto',
  },
  backText: {
    backgroundColor: 'white',
    fontSize: wp(4), // Adjusted for consistency
    fontWeight: 'bold',
    borderRadius: wp(2), // More proportional rounded corners
    padding: hp(1.2), // Using hp for vertical padding
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: hp(10), // More scalable vertical margin
    // top: 110,
  },
  glassContainer: {
    position: 'absolute',
    top: hp(63), // Relative to the screen height
    width: wp(90), // Ensure the width is responsive
    borderRadius: wp(10), // Rounded corners proportional to screen size
    overflow: 'hidden',
    height: hp(25),
    alignItems: 'center',
    // paddingHorizontal: 20,
    // right: 20,
  },
  blurView: {
    padding: wp(12), // Proportional padding for better responsiveness
    borderRadius: wp(5), // Rounded corners scaled to screen size
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Subtle transparent background
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)', // Glassmorphism border
    // alignItems: 'center',
  },
  title: {
    fontSize: wp(6), // Scaled font size for the title
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    // width: 143,
    // height: 50,
    // marginBottom: 20,
    // backgroundColor: 'red',
    bottom: 30,
  },
  subtitle: {
    fontSize: wp(4), // Adjusted subtitle font size for readability
    color: 'white',
    textAlign: 'center',
    width: wp(72),
    bottom: 10,
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: hp(2), // Adjusted vertical margin for the progress container
    bottom: 10,
  },
  progressLine: {
    width: wp(8), // Scaled width of the progress bar
    height: hp(0.6), // Scaled height of the progress bar
    // marginHorizontal: wp(1), // Proportional horizontal spacing
  },
  button: {
    backgroundColor: '#FFB81C',
    borderRadius: wp(7), // Proportional rounding of the button
    paddingVertical: hp(1), // Vertical padding scaled to screen height
    paddingHorizontal: wp(20), // Horizontal padding scaled to screen width
    alignItems: 'center',
    position: 'absolute',
    // bottom: hp(6), // Button position relative to the screen height
    top: hp(85),
  },
  buttonText: {
    fontSize: wp(5), // Scalable font size for button text
    color: 'white',
    fontWeight: 'bold',
  },
});
