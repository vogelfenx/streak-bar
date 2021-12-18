import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Circle from '../common/Circle'

export default function StreakBarItem(props) {

  const isAnyTaskDone = props.tasks_progress.tasksDoneCount > 0 ? true : false
  const isCurrentDay = props.tasks_progress.weekday == props.currentDay ? true : false
  const isNextDay = props.tasks_progress.tasksDoneCount == null ? true : false

  return (
    <View style={styles.container}>

      <View style={styles.headlineContainer}>
        <Text style={[styles.headlineText, isCurrentDay ? styles.headlineTextCurrentDay : {}]}>
          {props.tasks_progress.weekday}
        </Text>
      </View>

      <View style={styles.circleContainer}>
        <Circle
          radius={15}
          circleStyle={isAnyTaskDone ? styles.anyTaskDone : styles.noTaskDone}
        />
      </View>
      <Text></Text>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  headlineContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  circleContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  headlineText: {
    color: 'black',
  },
  headlineTextCurrentDay: {
    color: 'black',
    fontWeight: 'bold',
  },
  anyTaskDone: {
    // color: '#72e452',
    color: '#94e452',
    backgroundColor: '#94e452',
    width: 15
  },
  noTaskDone: {
    color: '#e8e5ff',
    backgroundColor: '#e8e5ff',
    width: 15
  },
  nextDay: {
    color: '#eceaff',
    width: 1
  },

})
