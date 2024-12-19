import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Header} from '@common/header';
import {
  BackArrow,
  CheckIcon,
  CorrectIcon,
  EnglishIcon,
  ItalyIcon,
  KoreaIcon,
  VietnamIcon,
} from '@assets';
import {hp, wp} from '@enums';
import {useNavigation} from '@react-navigation/native';

const languages = [
  {id: 1, name: 'Vietnam', icon: <VietnamIcon />},
  {id: 2, name: 'English', icon: <EnglishIcon />},
  {id: 3, name: 'Korea', icon: <KoreaIcon />},
  {id: 4, name: 'Italy', icon: <ItalyIcon />},
];

const LanguageScreen = () => {
  const naviagtion = useNavigation();
  const [selectedLanguage, setSelectedLanguage] = useState(1); // Default selection

  return (
    <View style={styles.container}>
      <Header
        heading="Language"
        Backarrow={<BackArrow />}
        onPress={() => naviagtion.goBack()}
      />
      <View style={styles.innerContainer}>
        {languages.map(item => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.languageItem,
              selectedLanguage === item.id && styles.selectedItem,
            ]}
            onPress={() => setSelectedLanguage(item.id)}>
            <View style={styles.iconTextWrapper}>
              <View style={styles.icon}>{item.icon}</View>
              <Text style={styles.languageText}>{item.name}</Text>
            </View>
            {selectedLanguage === item.id && <CheckIcon />}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default LanguageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F7F8',
  },
  innerContainer: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 20,
  },
  languageItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  selectedItem: {
    // backgroundColor: '#E8F5E9', // Light green background
  },
  iconTextWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: wp(3),
    backgroundColor: 'white', // Set the background color to white
    padding: 5,
    // Shadow for iOS
    shadowColor: '#000', // Shadow color
    shadowOffset: {width: 0, height: 2}, // Shadow offset
    shadowOpacity: 0.2, // Shadow opacity
    shadowRadius: 3, // Shadow blur radius
    // Shadow for Android
    elevation: 3, // Elevation provides shadow effect on Android
    borderRadius: 5,
  },
  languageText: {
    fontSize: 16,
    fontWeight: '500',
  },
  correct: {
    backgroundColor: '#00C48C',
    width: wp(4), // Set width as a percentage of the screen width
    height: hp(2), // Set height as a percentage of the screen height
    borderRadius: wp(2),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
