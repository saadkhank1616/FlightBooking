import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {COLORS} from '@enums';
import {MultiTrip, OneWayTrip, RoundTrip} from '@common';

const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState('Round trip');

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header_container}>
        <TouchableOpacity onPress={() => setActiveTab('Round trip')}>
          <View style={styles.tabContainer}>
            <Text style={styles.text}>Round trip</Text>
            {activeTab === 'Round trip' && <View style={styles.underline} />}
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('One-way')}>
          <View style={styles.tabContainer}>
            <Text style={styles.text}>One-way</Text>
            {activeTab === 'One-way' && <View style={styles.underline} />}
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('Multi')}>
          <View style={styles.tabContainer}>
            <Text style={styles.text}>Multi</Text>
            {activeTab === 'Multi' && <View style={styles.underline} />}
          </View>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView
        style={styles.contentContainer}
        contentContainerStyle={styles.scrollContent}>
        {activeTab === 'Round trip' && <RoundTrip />}
        {activeTab === 'One-way' && <OneWayTrip />}
        {activeTab === 'Multi' && <MultiTrip />}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F7F8',
  },
  header_container: {
    backgroundColor: COLORS.green,
    paddingVertical: 120,
    flexDirection: 'row',
    gap: 30,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  text: {
    color: 'white',
    fontWeight: '300',
  },
  tabContainer: {
    alignItems: 'flex-start',
  },
  underline: {
    height: 2,
    width: 25,
    backgroundColor: '#FFFFFF',
    marginTop: 5,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 30,
    marginHorizontal: 15,
    marginTop: -100, // Overlap effect with header
    marginBottom: 60,
  },
  scrollContent: {
    paddingHorizontal: 18,
    paddingVertical: 20,
  },
});
