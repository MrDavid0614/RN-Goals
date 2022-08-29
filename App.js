import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function onAddGoalHandler (goal) {
      const goalId = `${Math.ceil(Math.random() * 50)} ${new Date().toLocaleString()}`;
      const newGoal = { id: goalId, title: goal };
      setCourseGoals(prevGoals => [ newGoal, ...prevGoals ]);
  }

  function deleteGoalHandler (goalId) {
    setCourseGoals((prevGoals) => prevGoals.filter(goal => goal.id !== goalId));
  }

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.container}>
        <View style={styles.goalInputContainer}>
          <GoalInput onAddGoalHandler={onAddGoalHandler} />
        </View>
        <View>
          <FlatList
            data={courseGoals}
            renderItem={itemData => {
              const {item} = itemData;
              return (
                // The FlatList also looks in the courseGoals items for a key property to add it automatically
                // if items doesn't have a key property, we can use the FlatList prop called keyExtractor to get a key
                // or we can add a key as we do in react.
                <GoalItem id={item.id} title={item.title} onDeleteItem={deleteGoalHandler} />
              )
            }}
            keyExtractor={(item, index) => `${item}-${index}`}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    height: '100%',
    backgroundColor: '#1e085a'
  },
  goalInputContainer: {
    marginTop: 20,
    marginBottom: 30
  },
});
