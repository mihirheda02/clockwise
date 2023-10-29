import React from "react";
import { View, Text, TouchableOpacity, Switch, StyleSheet } from "react-native";

const AlarmItem = ({ title, time, details, isActive, onToggle }) => {
  return (
    <TouchableOpacity style={styles.alarmContainer}>
      <View style={styles.alarmDetails}>
        <Text style={styles.alarmTitle}>{title}</Text>
        <Text style={styles.alarmTime}>{time}</Text>
        <Text style={styles.alarmDays}>{details}</Text>
      </View>
      <Switch value={isActive} onValueChange={onToggle} />
    </TouchableOpacity>
  );
};

const AlarmScreen = () => {
  const [defaultAlarmActive, setDefaultAlarmActive] = React.useState(false);
  const [lectureAlarmActive, setLectureAlarmActive] = React.useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Alarm</Text>
        <TouchableOpacity>
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
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    color: "#FFF",
  },
  editButton: {
    fontSize: 18,
    color: "#FFF",
  },
  alarmContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#4A4A4A",
  },
  alarmDetails: {},
  alarmTitle: {
    fontSize: 18,
    color: "#FFF",
  },
  alarmTime: {
    fontSize: 24,
    color: "#FFF",
  },
  alarmDays: {
    fontSize: 14,
    color: "#FFF",
  },
  addButton: {
    position: "absolute",
    bottom: 30,
    right: 30,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#5A5A5A",
    justifyContent: "center",
    alignItems: "center",
  },
  plusSign: {
    fontSize: 24,
    color: "#FFF",
  },
});

export default AlarmScreen;
