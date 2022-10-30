import { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Task from "./components/Task";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState(null);
  const handleAddTask = () => {
    // Keyboard.dismiss();
    setTasks([...tasks, text]);
    setText(null);
  };
  const deleteTask = (index) => {
    let itemsCopy = [...tasks];
    var itemIndex = itemsCopy.indexOf(index); //get  "car" index
    itemsCopy.splice(itemIndex, 1);
    setTasks(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.wrapper}>
          <Text style={styles.headingText}>Today's Tasks</Text>
          {tasks.map((task, index) => {
            return <Task key={index} task={task} deleteTask={deleteTask} />;
          })}
        </View>
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTextContainer}
      >
        <TextInput
          placeholder="Add new task"
          style={styles.inputBox}
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.plusButton}>
            <Text style={styles.plusIcon}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  wrapper: {
    marginTop: 80,
    paddingHorizontal: 20,
  },
  headingText: {
    fontSize: 24,
    // textAlign: "center",
    fontWeight: "bold",
  },
  writeTextContainer: {
    position: "absolute",
    bottom: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  inputBox: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    // borderColor: "#C0C0C0",
    // borderWidth: 1,
    width: 250,
  },
  plusButton: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    // borderColor: "#C0C0C0",
    // borderWidth: 1,
  },
  plusIcon: {
    color: "#C0C0C0",
  },
});
