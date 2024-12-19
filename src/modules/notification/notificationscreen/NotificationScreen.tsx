import {StyleSheet, View, FlatList} from 'react-native';
import React from 'react';
import {Spacer, NotiCard} from '@common';
import {Header} from '@common/header';

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
  },
  {
    id: '3',
    title: 'Qatar Airways',
    time: '09:45',
    description: 'Flight delay notification for your booking.',
  },
  // Add more notifications as needed
];

const NotificationScreen = () => {
  const renderItem = ({item}) => (
    <NotiCard
      title={item.title}
      time={item.time}
      description={item.description}
    />
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
});
