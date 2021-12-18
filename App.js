import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StreakBar from './components/streak-bar/StreakBar';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Demo</Text> */}
      <StreakBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',

    paddingTop: Constants.statusBarHeight + 20,
    alignItems: 'center',
    justifyContent: 'flex-start',

    backgroundColor: '#fffff4',
    // backgroundColor: '#f6ffe6',
  },
});
