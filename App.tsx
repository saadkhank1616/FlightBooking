import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {RootNavigation} from '@navigation';
import React from 'react';
import {StyleSheet, View} from 'react-native';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={styles.container}>
        <RootNavigation />
      </View>
    </GestureHandlerRootView>
  );
};

export default App;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
