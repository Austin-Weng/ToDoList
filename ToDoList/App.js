import React from 'react';
import { StyleSheet, View, Text, FlatList, StatusBar,} from 'react-native';

const tasks = [
  { key: 'Work on expo project' },
  { key: 'HUMANITAS ART PROJECT' },
  { key: 'Torque Lab 9.9' },
  { key: 'Collision Rewrite'},
  { key: 'Assignment #8 - Computing Integrals' },
];
const doneTasks = [
  
];

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <tr>
        <th style={styles.header}>To-Do</th>
      </tr>
      <FlatList
        data={tasks}
        renderItem={({item}) => <Text style={styles.taskItem}>{item.key}</Text>}
      />
      <tr>
        <th style={styles.completed}> Completed </th>
      </tr>
      <AddTaskBar style={styles.addTaskBar}/>
    </View>
  );

  function AddTaskBar() {
    return (
      <form>
        <input type="text" placeholder="Click here to add a task" />
        <label>
          <input type="checkbox" />
          {' '}
        </label>
      </form>
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
  },
  container: {
    flex: 1,
    backgroundColor: 'lavender', // Semi-transparent background
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
    borderColor: 'black', // Semi-transparent border
  },
  taskText: {
    color: 'white',
    fontSize: 18,
    flex: 1,
  },
  addTaskBar: {
    margin: 10,
    position: 'absolute',
    left:0,
    bottom:0,
    right:0,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'blue',
  }
});
