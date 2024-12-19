import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import {OnBoarding1, OnBoarding2, OnBoarding3} from '@assets/images';
import {styles} from './style';
import {hp, wp} from '@enums';
import {Spacer} from '@common/spacer';
import {BackArrow} from '@assets';

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

export const Onboarding = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handleSkip = () => {
    setCurrentSlide(slides.length - 1); // Skip to the last slide
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
          width: wp(80),
          height: hp(50),
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

      <TouchableOpacity
        style={styles.button}
        onPress={handleNext}
        disabled={currentSlide === slides.length - 1}>
        <Text style={styles.buttonText}>
          {currentSlide === slides.length - 1 ? "Let's go" : 'Next'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
