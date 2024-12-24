import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Switch,
} from 'react-native';
import {COLORS, wp, hp} from '@enums';
import {Button} from '@common/button';
import {Spacer} from '@common/spacer';
import {CorrectIcon} from '@assets';

const FilterModal = ({onPress}) => {
  const [priceRange, setPriceRange] = useState([2340000, 3340000]);
  const [selectedOptions, setSelectedOptions] = useState({
    nonstop: true,
    allFlight: false,
    earlyFlight: true,
    lateFlight: false,
  });

  const toggleOption = option => {
    setSelectedOptions(prevState => ({
      ...prevState,
      [option]: !prevState[option],
    }));
  };

  const renderOption = (title, optionKey) => (
    <TouchableOpacity
      style={styles.optionContainer}
      onPress={() => toggleOption(optionKey)}>
      <Text style={styles.optionText}>{title}</Text>
      <View
        style={[
          styles.checkbox,
          selectedOptions[optionKey] && styles.selectedCheckbox,
        ]}>
        {selectedOptions[optionKey] && <CorrectIcon />}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Spacer />
      {/* Header */}
      <Text style={styles.headerText}>Filter</Text>
      <Spacer height={hp(3)} />
      {/* Price Range */}
      <View style={styles.priceRangeContainer}>
        <Text style={styles.priceText}>
          {priceRange[0].toLocaleString()} vnd →{' '}
          {priceRange[1].toLocaleString()} vnd
        </Text>
        {/* Placeholder for slider */}
        <View style={styles.sliderTrack}>
          <View style={styles.sliderThumb} />
          <View style={styles.sliderThumb} />
        </View>
        <Spacer />
        <View style={styles.priceLabels}>
          <Text style={styles.priceLabelText}>1.990.000 vnd</Text>
          <Text style={styles.priceLabelText}>4.990.000 vnd</Text>
        </View>
      </View>
      <Spacer height={hp(2)} />
      {/* Filter Options */}
      <View style={styles.filterOptionsContainer}>
        {renderOption('Non-stop', 'nonstop')}
        {renderOption('All flight', 'allFlight')}
      </View>
      <Spacer />
      <View style={styles.filterOptionsContainer}>
        {renderOption('Early flight', 'earlyFlight')}
        {renderOption('Late flight', 'lateFlight')}
      </View>
      <Spacer height={hp(2)} />
      {/* Done Button */}
      <Button title="Done" onPress={onPress} />
    </View>
  );
};

export default FilterModal;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: wp(5),
    backgroundColor: 'white',
    borderRadius: 15,
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: wp(5),
    fontWeight: 'bold',
    color: COLORS.textcolor,
  },
  priceRangeContainer: {
    // marginVertical: hp(3),
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    borderColor: '#DCE3DE',
  },
  priceText: {
    fontSize: wp(4),
    fontWeight: 'bold',
    color: COLORS.textcolor,
    // textAlign: 'center',
    marginBottom: hp(2),
  },
  sliderTrack: {
    height: hp(1),
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(5),
  },
  sliderThumb: {
    width: wp(4),
    height: wp(4),
    backgroundColor: COLORS.green,
    borderRadius: wp(2),
  },
  priceLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(1),
  },
  priceLabelText: {
    fontSize: wp(3.5),
    color: COLORS.textcolor,
  },
  filterOptionsContainer: {
    marginVertical: hp(1),
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#DCE3DE',
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: hp(1),
  },
  optionText: {
    fontSize: wp(4),
    color: COLORS.textcolor,
  },
  checkbox: {
    width: wp(6),
    height: wp(6),
    borderRadius: wp(3),
    borderWidth: 1,
    borderColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F7F8',
  },
  selectedCheckbox: {
    // backgroundColor: COLORS.green,
    // borderColor: COLORS.green,
  },
  checkmark: {
    width: wp(3),
    height: wp(3),
    backgroundColor: 'white',
    borderRadius: wp(1.5),
  },
  //   doneButton: {
  //     backgroundColor: COLORS.primary,
  //     paddingVertical: hp(2),
  //     borderRadius: 10,
  //     alignItems: 'center',
  //   },
  //   doneButtonText: {
  //     color: 'white',
  //     fontSize: wp(4),
  //     fontWeight: 'bold',
  //   },
});
