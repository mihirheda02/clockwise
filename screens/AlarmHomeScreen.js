import React from "react";
import { View, Text, TouchableOpacity, Switch, StyleSheet } from "react-native";

const PINK_COLOR = "#FF69B4";

const AlarmItem = ({ title, time, details, isActive, onToggle }) => {
  return (
    <TouchableOpacity style={styles.alarmContainer}>
      <View style={styles.alarmDetails}>
        <Text style={styles.alarmTitle}>{title}</Text>
        <Text style={styles.alarmTime}>{time} AM</Text>
        <Text style={styles.alarmDays}>{details}</Text>
      </View>
      <Switch
        value={isActive}
        onValueChange={onToggle}
        trackColor={{ false: "#767577", true: PINK_COLOR }}
      />
    </TouchableOpacity>
  );
};

const AlarmScreen = () => {
  const [defaultAlarmActive, setDefaultAlarmActive] = React.useState(false);
  const [lectureAlarmActive, setLectureAlarmActive] = React.useState(true);

  return (
    // <View style={styles.container}>
    //   <View style={styles.header}>
    //     <Text style={styles.headerTitle}>Alarm</Text>
    //     <TouchableOpacity style={styles.editButtonContainer}>
    //       <Text style={styles.editButton}>Edit</Text>
    //     </TouchableOpacity>
    //   </View>
    <View style={styles.container}>
      <View style={[styles.header, { paddingHorizontal: 0 }]}>
        <Text style={styles.headerTitle}>Alarm</Text>
        <TouchableOpacity style={styles.editButtonContainer}>
          <Text style={styles.editButton}>Edit</Text>
        </TouchableOpacity>
      </View>

      <AlarmItem
        title="Default Alarm"
        time="10:30"
        details="Mon, Tue, Thru, Fri"
        isActive={defaultAlarmActive}
        onToggle={() => setDefaultAlarmActive(!defaultAlarmActive)}
      />

      <AlarmItem
        title="CS 61B Lecture: Wheeler 150"
        time="6:30"
        details="6:18 - 6:33"
        isActive={lectureAlarmActive}
        onToggle={() => setLectureAlarmActive(!lectureAlarmActive)}
      />

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.plusSign}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2A2A2A",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    marginBottom: 30,
    height: "10%",
  },
  headerTitle: {
    fontSize: 38,
    color: "#FFF",
    position: "absolute",
    bottom: 0,
  },
  editButtonContainer: {
    position: "absolute",
    right: 0,
    justifyContent: "center",
  },
  editButton: {
    fontSize: 24,
    color: PINK_COLOR,
  },
  alarmContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
    padding: 30,
    borderRadius: 10,
    backgroundColor: "#5A5A5A",
  },
  alarmDetails: {},
  alarmTitle: {
    fontSize: 24,
    color: "#FFF",
  },
  alarmTime: {
    fontSize: 50,
    fontWeight: "bold",
    paddingVertical: 5,
    color: "#FFF",
  },
  alarmDays: {
    fontSize: 18,
    color: "#FFF",
  },
  addButton: {
    position: "absolute",
    bottom: 30,
    right: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: PINK_COLOR,
    justifyContent: "center",
    alignItems: "center",
  },
  plusSign: {
    fontSize: 36,
    color: "#FFF",
  },
});

export default AlarmScreen;
