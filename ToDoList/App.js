import React from 'react';
import { StyleSheet, View, Text, FlatList} from 'react-native';

const tasks = [
  { key: 'Work on expo project' },
  { key: 'HUMANITAS ART PROJECT' },
  { key: 'Torque Lab 9.9' },
  { key: 'Collision Rewrite'},
  { key: 'Assignment #8 - Computing Integrals' },
];

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <FlatList
        data={tasks}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
      <addTaskBar style={styles.addTaskBar}/>
    </View>
  );

  function addTaskBar() {
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
  container: {
    flex: 1,
    backgroundColor: '#00000080', // Semi-transparent background
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff50', // Semi-transparent border
  },
  taskText: {
    color: 'white',
    fontSize: 18,
    flex: 1,
  },
  addTaskBar: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'blue',
  }
});
