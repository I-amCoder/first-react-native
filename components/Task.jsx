import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Task = ({ task, deleteTask }) => {
  return (
    <View style={styles.task}>
      <View style={styles.left}>
        <Text style={styles.square}></Text>
        <Text style={styles.taskTExt}>{task}</Text>
      </View>
      <TouchableOpacity onPress={() => deleteTask(task)}>
        <View style={styles.right}>
          <Text style={styles.circle}>-</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  task: {
    display: "flex",
    marginTop: 20,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    padding: 15,
  },
  left: {
    display: "flex",
    flexDirection: "row",
  },
  taskTExt: {
    fontSize: 20,
  },
  right: {
    marginRight: 20,
  },
  square: {
    backgroundColor: "#55BCF6",
    width: 30,
    borderRadius: 5,
    opacity: 0.4,
    height: 30,
    marginRight: 5,
  },
  circle: {
    // borderRadius: 5,
    width: 12,
    height: 12,
    borderBottomColor: "red",
    borderBottomWidth: 2,
  },
});

export default Task;
