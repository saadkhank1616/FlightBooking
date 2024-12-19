import {Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';

export const HeaderHome = () => {
  const [activeTab, setActiveTab] = useState('Round trip'); // Track the active tab

  return (
    <View style={styles.container}>
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
  );
};
