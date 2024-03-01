import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, StatusBar, TouchableOpacity, TextInput} from 'react-native';

const tasks = [
  { id: '1', key: 'Work on react project', completed: false },
  { id: '2', key: 'Prep 11: Hearing & Equilibrium', completed: false },
  { id: '3', key: 'Torque Lab 9.9', completed: false },
  { id: '4', key: '9.17 Webassign', completed: false },
  { id: '5', key: 'Assignment #8 - Computing Integrals', completed: false },
];
const doneTasks = [
  
];

export default function App() {

  const [taskList, setTaskList] = useState(tasks);  

  const toggleTaskCompletion = (id) => {
    const updatedTasks = taskList.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTaskList(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View>
        <Text style={styles.header}>To-Do</Text>
      </View>
      <FlatList
        data={taskList}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <TouchableOpacity onPress={() => toggleTaskCompletion(item.id)} style={[styles.circle, item.completed && styles.filledCircle]} />
            <Text>{item.key}</Text>
          </View>
        )}
      />
      <AddTaskBar/>
    </View>
  );

  function AddTaskBar() {
    return (
      <View style={styles.addTaskBar}> 
        <TextInput placeholder="Click here to add a task"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  completed: {
    fontSize: 10,
    alignItems: 'left',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 30,
    paddingTop: 60,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    textAlign: 'center',
    alignItems: 'center',
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    margin: 5,
    borderWidth: 3,
    borderRadius: 5,
    borderColor: 'black',
    backgroundColor: 'lightgrey',
  },
  taskText: {
    color: 'white',
    fontSize: 18,
    flex: 1,
  },
  addTaskBar: {
    padding: 10,
    positionX: 0,
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 2,
    width: '90%',
    marginBottom: 50,
    borderRadius: 5,
  },
  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'blue',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filledCircle: {
    backgroundColor: 'blue',
  },
});
