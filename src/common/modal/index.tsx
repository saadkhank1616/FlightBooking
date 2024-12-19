import React from 'react';
import {View, Modal, StyleSheet} from 'react-native';

export const CustomModal = ({visible, onClose, children}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <View style={styles.content}>{children}</View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    // alignItems: 'center',
    // backgroundColor: 'red',
  },
  modalContainer: {
    backgroundColor: 'white',
    // shadowColor: '#000',
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 5,
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
    // padding: 20,
    // top: 20,
  },
  content: {},
});
