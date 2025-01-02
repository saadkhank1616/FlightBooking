import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import {OnBoarding1, OnBoarding2, OnBoarding3} from '@assets/images';
// import {styles} from './style';
import {COLORS, hp, SCREEN, wp} from '@enums';
import {Spacer} from '@common/spacer';
import {BackArrow} from '@assets';
import {useNavigation} from '@react-navigation/native';

const slides = [
  {
    SvgComponent: OnBoarding1,
    title: 'Welcome!!!',
    subtitle: 'Welcome to VietnamAirlines, the leading airline in Vietnam.',
  },
  {
    SvgComponent: OnBoarding2,
    title: 'Satisfaction',
    subtitle:
      'At Vietnam Airlines, bringing customer satisfaction is our mission.',
  },
  {
    SvgComponent: OnBoarding3,
    title: 'Assistance',
    subtitle:
      '24/7 support whenever customers have questions about the service.',
  },
];

const OnBoardingScreen = () => {
  const navigation = useNavigation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      // console.log(SCREEN.Login);
      navigation.navigate(SCREEN.Login); // Navigate to the Login screen
    }
  };

  const handleSkip = () => {
    navigation.navigate(SCREEN.Login);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => currentSlide > 0 && setCurrentSlide(currentSlide - 1)}
          style={styles.backButtonContainer}>
          {currentSlide > 0 && (
            <Text style={styles.backText}>
              <BackArrow />
            </Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSkip}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Render the SVG dynamically from the array */}
      <View style={styles.imageContainer}>
        {React.createElement(slides[currentSlide].SvgComponent, {
          width: wp(85),
          height: hp(55),
        })}
      </View>

      <View style={styles.glassContainer}>
        <BlurView
          style={styles.blurView}
          blurType="light"
          blurAmount={20}
          reducedTransparencyFallbackColor="rgba(255, 255, 255, 0.1)">
          <Text style={styles.title}>{slides[currentSlide].title}</Text>
          <Spacer />
          <Text style={styles.subtitle}>{slides[currentSlide].subtitle}</Text>
          <Spacer height={hp(2)} />
          <View style={styles.progressContainer}>
            {slides.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.progressLine,
                  {backgroundColor: index === currentSlide ? 'red' : '#ccc'},
                ]}
              />
            ))}
          </View>
        </BlurView>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>
          {currentSlide === slides.length - 1 ? "Let's go" : 'Next'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default OnBoardingScreen;
const styles = StyleSheet.create({
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
