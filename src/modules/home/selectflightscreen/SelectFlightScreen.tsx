import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {COLORS, wp, hp, SCREEN} from '@enums';
import {
  GreenFilterIcon,
  SelectWhiteDotIcon,
  WhiteArrowBack,
  WhitePlaneIcon,
} from '@assets';
import {CardList, CustomModal, Spacer} from '@common';
import {isIOS} from '@helpers';
import FilterModal from '@common/filtermodal';
import {useNavigation} from '@react-navigation/native';

const cardData = [
  {
    id: '1',
    fromCode: 'SGN',
    toCode: 'HAN',
    fromCity: 'Ho Chi Minh',
    toCity: 'Ha Noi',
    duration: '1h45m',
    departureTime: '10:00 AM',
    departureDate: '18 July, 2020',
    arrivalTime: '12:00 PM',
    arrivalDate: '18 July, 2020',
    airline: 'Vietnam Airlines',
    price: '2,190,000 VND',
  },
  {
    id: '2',
    fromCode: 'DAN',
    toCode: 'HAN',
    fromCity: 'Da Nang',
    toCity: 'Ha Noi',
    duration: '1h20m',
    departureTime: '08:00 AM',
    departureDate: '19 July, 2020',
    arrivalTime: '09:20 AM',
    arrivalDate: '19 July, 2020',
    airline: 'Pacific Airlines',
    price: '1,700,000 VND',
  },
  // Add more objects as needed
  {
    id: '3',
    fromCode: 'DAN',
    toCode: 'HAN',
    fromCity: 'Da Nang',
    toCity: 'Ha Noi',
    duration: '1h20m',
    departureTime: '08:00 AM',
    departureDate: '19 July, 2020',
    arrivalTime: '09:20 AM',
    arrivalDate: '19 July, 2020',
    airline: 'Pacific Airlines',
    price: '1,700,000 VND',
  },
  {
    id: '4',
    fromCode: 'SAN',
    toCode: 'HAN',
    fromCity: 'Da Nang',
    toCity: 'Ha Noi',
    duration: '1h20m',
    departureTime: '08:00 AM',
    departureDate: '19 July, 2020',
    arrivalTime: '09:20 AM',
    arrivalDate: '19 July, 2020',
    airline: 'Pacific Airlines',
    price: '1,700,000 VND',
  },
];

const SelectFlightScreen = () => {
  const naviagtion = useNavigation();
  const [selectedButton, setSelectedButton] = useState('Low price');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const buttons = ['Low price', 'Early flight', 'Late flight'];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Top Header */}
        <View style={styles.topHeader}>
          <TouchableOpacity onPress={() => naviagtion.goBack()}>
            <WhiteArrowBack />
          </TouchableOpacity>
          <Text style={styles.selectFlightText}>Select Flights</Text>
          <View />
        </View>

        {/* Flight Route */}
        <View style={styles.flightRouteContainer}>
          {/* Curved Line with Dots */}
          <Svg height={hp(20)} width="100%" style={styles.svgContainer}>
            {/* Curved Dotted Line */}
            <Path
              d="M40 120 Q180 0 320 120" // Adjusted curve for more pronounced curvature
              stroke="white"
              strokeWidth="2"
              strokeDasharray="1,6" // Slightly larger dash effect
              fill="none"
            />
          </Svg>

          {/* Left Dot */}
          <View style={[styles.dotContainer, {left: wp(38), top: hp(13)}]}>
            <SelectWhiteDotIcon />
          </View>

          {/* Right Dot */}
          <View style={[styles.dotContainer, {right: wp(43), top: hp(13)}]}>
            <SelectWhiteDotIcon />
          </View>

          {/* Airplane Icon */}
          <View style={styles.planeIconContainer}>
            <WhitePlaneIcon />
          </View>

          {/* Flight Info */}
          <View style={styles.flightInfoContainer}>
            <Text style={styles.flightDuration}>1h45m</Text>
            <Text style={styles.flightType}>Non stop</Text>
          </View>
        </View>
        <Spacer />
        {/* Locations */}
        <View style={styles.locationsContainer}>
          <View>
            <Text style={styles.locationText}>SGN</Text>
            <Text style={styles.dateText}>18 July, 2020</Text>
          </View>
          <View>
            <Text style={styles.locationText}>HAN</Text>
            <Text style={styles.dateText}>19 July, 2020</Text>
          </View>
        </View>
        <Spacer height={hp(3)} />
      </View>
      {/* {filter Container} */}
      <View style={styles.filterCOn}>
        <Text style={styles.filterText}>Bussines Class, 1 Adult, 2 Baby</Text>
        <TouchableOpacity onPress={() => setIsModalVisible(true)}>
          <GreenFilterIcon />
        </TouchableOpacity>
      </View>
      {/* {buttons} */}
      <View style={styles.buttonsContainer}>
        {buttons.map(button => (
          <TouchableOpacity
            key={button}
            style={[
              styles.button,
              selectedButton === button && styles.selectedButton,
            ]}
            onPress={() => setSelectedButton(button)}>
            <Text
              style={[
                styles.buttonText,
                selectedButton === button && styles.selectedButtonText,
              ]}>
              {button}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {/* {FlatList card data} */}
      <View style={styles.modalContainer}>
        <FlatList
          data={cardData}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.cardContainer}>
              <CardList
                item={item}
                onPress={() => naviagtion.navigate(SCREEN.Summary)}
              />
            </View>
          )}
          showsVerticalScrollIndicator={false}
          // numColumns={2}
          contentContainerStyle={styles.listContainer}
        />
      </View>

      {/* custom modal */}
      <View style={styles.modalCOntainer}>
        <CustomModal
          visible={isModalVisible}
          onClose={() => setIsModalVisible(false)}>
          <FilterModal onPress={() => setIsModalVisible(false)} />
        </CustomModal>
      </View>
    </View>
  );
};

export default SelectFlightScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BackGround,
  },
  header: {
    padding: 15,
    backgroundColor: COLORS.green,
    alignItems: 'center',
    borderBottomLeftRadius: 15,
    borderBottomEndRadius: 15,
  },
  topHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  selectFlightText: {
    color: 'white',
    fontSize: wp(5),
  },
  flightRouteContainer: {
    alignItems: 'center',
    position: 'relative',
    bottom: hp(2),
    left: wp(4.5),
  },
  svgContainer: {
    position: 'absolute',
  },
  dotContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  planeIconContainer: {
    position: 'absolute',
    top: hp(5), // Vertically centered on the curve
    transform: [{translateX: -15}], // Horizontally centered
  },
  flightInfoContainer: {
    marginTop: hp(8),
    alignItems: 'center',
    right: wp(3),
  },
  flightDuration: {
    color: 'white',
    fontSize: wp(4),
    fontWeight: 'bold',
  },
  flightType: {
    color: 'white',
    fontSize: wp(3),
  },
  locationsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  locationText: {
    color: 'white',
    fontSize: wp(4),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dateText: {
    color: 'white',
    fontSize: wp(3),
    textAlign: 'center',
  },
  filterCOn: {
    marginHorizontal: wp(3),
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 15,
    bottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // width: '100%',
  },
  filterText: {
    color: COLORS.textcolor,
    // fontSize: 16,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
    marginHorizontal: wp(2),
    // marginTop: hp(2),
  },
  button: {
    backgroundColor: '#DCE3DE',
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(6),
    borderRadius: 20,
    borderColor: COLORS.textcolor,
    bottom: 13,
    marginHorizontal: wp(1.5),
  },
  selectedButton: {
    backgroundColor: COLORS.green,
    // borderColor: COLORS.green,
  },
  buttonText: {
    color: COLORS.green,
    fontSize: wp(3),
    textAlign: 'center',
  },
  selectedButtonText: {
    color: 'white',
  },
  modalCOntainer: {
    // flex: 1,
    // justifyContent: 'center',
    // backgroundColor: 'red',
  },
  modalContainer: {
    flex: 1,
    // padding: 20, // Adjust padding around the modal container
  },
  listContainer: {
    paddingBottom: 20, // Add space at the bottom of the list
  },
  cardContainer: {
    flex: 1,
    margin: 5, // Space between cards
  },
});
