import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS, hp, SCREEN, wp} from '@enums';
import {Header} from '@common/header';
import {BackArrow, ConditionModalIocn, InfoIcon} from '@assets';
import {
  Button,
  CardList,
  CustomModal,
  Footer,
  Spacer,
  SummaryCard,
  SummaryTotal,
} from '@common';
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
];

const SummaryScreen = () => {
  const [modal, setModal] = useState(false);
  const [conditionsmodal, setConditionModal] = useState(false);
  const navigation = useNavigation();
  const handelmodalvisible = () => {
    setModal(false);
    setConditionModal(true);
  };
  const handelnextcondition = () => {
    setConditionModal(false);
    navigation.navigate(SCREEN.Information);
  };
  return (
    <View style={styles.container}>
      <Header
        heading="Summary"
        Backarrow={<BackArrow />}
        icon={<InfoIcon />}
        onPress={() => navigation.goBack()}
      />
      <Spacer />
      <View style={styles.textcontainer}>
        <Text style={styles.textheading}>One-way, (ThUR, 18 July, 2020)</Text>
      </View>
      <View style={styles.innercontainer}>
        <FlatList
          data={cardData}
          keyExtractor={item => item.id}
          renderItem={({item}) => <CardList item={item} />}
          //   contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
          //   contentContainerStyle={{paddingBottom: 20}}
        />
        <SummaryCard />
        <Spacer />
        <SummaryTotal />
      </View>
      <Footer title="Next" onPress={() => setModal(true)} />
      <View>
        <CustomModal visible={modal} onClose={() => setModal(false)}>
          <View style={styles.modalcontainer}>
            <Spacer />
            <Text style={styles.detailtext}>Detail Bill</Text>
            <Spacer height={hp(3)} />
            <View style={styles.row}>
              <Text>Price : </Text>
              <Text>570,000 vnd</Text>
            </View>
            <Spacer />
            <View style={styles.row}>
              <Text>Fee : </Text>
              <Text>1.000.000 vnđ</Text>
            </View>
            <Spacer />
            <View style={styles.row}>
              <Text>Luggage:</Text>
              <Text>420.000 vnđ</Text>
            </View>
            <Spacer />
            <View style={styles.row}>
              <Text>VAT:</Text>
              <Text>190.000 vnđ</Text>
            </View>
            <Spacer height={hp(4)} />
            <Button title="Next" onPress={handelmodalvisible} />
          </View>
        </CustomModal>
        <CustomModal
          visible={conditionsmodal}
          onClose={() => setConditionModal(false)}>
          <View style={styles.modalcontainer}>
            <Spacer />
            <Text style={styles.detailtext}>Conditios of Tickets</Text>
            <Spacer height={hp(3)} />
            <View style={styles.icon}>
              <ConditionModalIocn />
            </View>
            <Spacer height={hp(3)} />
            <View style={styles.rowlines}>
              <Text>Dear:</Text>
              <Text> NGUYEN VAN CHIEN</Text>
            </View>
            <Spacer height={hp(2)} />
            <View>
              <Text>
                Congratulations on your successful registration of VietNam
                Airlines.
              </Text>
            </View>
            <Spacer height={hp(2)} />
            <View>
              <Text>Your membership information includes:</Text>
            </View>
            <View style={styles.rowlines}>
              <Text>Full name:</Text>
              <Text> NGUYEN VAN CHIEN</Text>
            </View>
            <View style={styles.rowlines}>
              <Text>Email:</Text>
              <Text>chiennv.pixelz@gmail.com</Text>
            </View>
            <View style={styles.rowlines}>
              <Text>VietNam Airlines Skyclub ID:</Text>
              <Text>515118312280</Text>
            </View>
            <View style={styles.rowlines}>
              <Text> Mobile phone :</Text>
              <Text>0907561996</Text>
            </View>
            <View>
              <Text>
                Kindly top-up your card number to activate Vietjet Skyclub
              </Text>
            </View>
            <View>
              <Text>
                For more detail, kindly contact Vietjet Call Center at
              </Text>
            </View>
            <View>
              <Text>(+84) 1900 1886</Text>
            </View>
            <Spacer height={hp(3)} />
            <Button title="Agree" onPress={handelnextcondition} />
            <Spacer />
          </View>
        </CustomModal>
      </View>
    </View>
  );
};

export default SummaryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BackGround,
  },
  innercontainer: {
    // marginHorizontal: wp(1),
  },
  textcontainer: {
    marginHorizontal: wp(2),
  },
  textheading: {
    color: COLORS.textcolor,
  },
  modalcontainer: {
    padding: 14,
    // paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  detailtext: {
    color: '#00579A',
    fontSize: wp(5),
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowlines: {
    flexDirection: 'row',
  },
});
