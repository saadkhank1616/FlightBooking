import {Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {NotifcationLogoIcon} from '@assets'; // Assuming this is your notification logo
import {styles} from './style';
import {Spacer} from '@common/spacer';

export const NotiCard = ({title, time, description, type}) => {
  return (
    <View style={styles.container}>
      <View>
        <NotifcationLogoIcon />
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.airlines}>{title}</Text>
          <Text>{time}</Text>
        </View>
        <View>
          <Text style={styles.text}>{description}</Text>
        </View>
        {/* Conditionally render buttons based on type */}
        {/* <Spacer /> */}
        <View style={styles.buttonContainer}>
          {type === 'failed' ? (
            <TouchableOpacity style={styles.buttonCheck}>
              <Text style={styles.buttonText}>Check</Text>
            </TouchableOpacity>
          ) : type === 'update' ? (
            <View style={styles.updateButtons}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Update</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.notNowButton]}>
                <Text style={[styles.buttonText, styles.notNowText]}>
                  Not Now
                </Text>
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
      </View>
    </View>
  );
};
