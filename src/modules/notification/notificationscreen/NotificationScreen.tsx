import {StyleSheet, View, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {Spacer, NotiCard} from '@common';
import {Header} from '@common/header';
import {DeleteNotiIcon} from '@assets'; // Assume DeleteIcon is for swipe action
import {Swipeable} from 'react-native-gesture-handler';

const notificationData = [
  {
    id: '1',
    title: 'Vietnam Airlines',
    time: '15:23',
    description: 'Give you a coupon code: Check n...',
  },
  {
    id: '2',
    title: 'Emirates Airlines',
    time: '12:15',
    description: 'Special offer on flights to Dubai...',
    type: 'update',
  },
  {
    id: '3',
    title: 'Qatar Airways',
    time: '09:45',
    description: 'Your booking has failed, check the booking process again :)',
    type: 'failed',
  },
  // Add more notifications as needed
];

const renderRightActions = () => (
  <View style={styles.rightAction}>
    <TouchableOpacity>
      <DeleteNotiIcon />
    </TouchableOpacity>
  </View>
);

const NotificationScreen = () => {
  const renderItem = ({item}) => (
    <Swipeable renderRightActions={renderRightActions}>
      <NotiCard
        title={item.title}
        time={item.time}
        description={item.description}
        type={item.type}
      />
    </Swipeable>
  );

  return (
    <View style={styles.container}>
      <Header heading="Notification" />
      <Spacer />
      <FlatList
        data={notificationData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F7F8',
  },
  rightAction: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    marginVertical: 8,
    borderRadius: 8,
    // marginLeft: 3,
  },
});
