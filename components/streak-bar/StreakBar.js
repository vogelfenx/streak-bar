import React from 'react'
import { StyleSheet, View, Text, ScrollView, Dimensions } from 'react-native'
import Circle from '../common/Circle';
import StreakBarItem from './StreakBarItem'

export default function StreakBar() {

  const testData = require('../../data/test-data.json');
  const currentDay = testData.currentWeekday

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.ScrollViewContainer} horizontal={true}>
        {
          testData.tasks_progress_per_day.map(
            (tasks_progress, index) => {
              return (
                <View key={index} style={styles.streakBarItem}>
                  <StreakBarItem tasks_progress={tasks_progress} currentDay={currentDay} />
                </View>
              )
            }
          )
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    flexDirection: 'row',

    width: '100%',
    height: 80,
  },
  ScrollViewContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',

    minWidth: 300,

    paddingRight: 20,
    paddingLeft: 20,

    paddingTop: 10,
    paddingBottom: 10,
  },
  streakBarItem: {
    flex: 1,
  },
})

