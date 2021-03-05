import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoal, setCourseGoal] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const addGoalHandler = (goalContent) => {
    setCourseGoal((state) => [
      ...state,
      { id: Math.random().toString(), value: goalContent },
    ]);
    setIsAddMode(false);
  };
  const removeGoalHandler = (goalId) => {
    setCourseGoal((state) => {
      return state.filter((goal) => goal.id !== goalId);
    });
  };
  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };
  return (
    <View style={styles.screen}>
      <Button title="Add new goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        onAddGoal={addGoalHandler}
        visible={isAddMode}
        onCancel={cancelGoalAdditionHandler}
      />

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoal}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 60,
  },
});
