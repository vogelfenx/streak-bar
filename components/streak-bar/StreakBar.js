import React from "react";
import { StyleSheet, View, ScrollView, Dimensions } from "react-native";
import StreakBarItem from "./StreakBarItem";

export default function StreakBar() {
  const testData = require("../../data/test-data.json");
  const currentDay = testData.currentWeekday;
  const currentDayNumber = testData.currentWeekdayNumber;

  return (
    <View style={[styles.container, styles.streakBarShadow]}>
      <ScrollView
        contentContainerStyle={styles.ScrollViewContainer}
        horizontal={true}
      >
        {testData.tasks_progress_per_day.map((tasks_progress, index) => {
          return (
            <View key={index} style={styles.streakBarItem}>
              <StreakBarItem
                tasks_progress={tasks_progress}
                currentDay={currentDay}
                currentDayNumber={currentDayNumber}
                index={index}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",

    width: "100%",
    height: 80,

    backgroundColor: 'white',
  },
  ScrollViewContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",

    minWidth: 300,

    paddingRight: 20,
    paddingLeft: 20,

    paddingTop: 10,
    paddingBottom: 10,
  },
  streakBarShadow: {
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.5,
    
    elevation: 2,
  },
  streakBarItem: {
    flex: 1,
  },
});
