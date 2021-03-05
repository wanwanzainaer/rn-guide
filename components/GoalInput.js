import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet, Modal } from 'react-native';
const GoalInput = ({ visible, onAddGoal, onCancel }) => {
  const [enteredGoal, setEnteredGoal] = useState('');
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    onAddGoal(enteredGoal);
    setEnteredGoal('');
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="CANCEL"
              color="red"
              onPress={() => {
                onCancel();
                setEnteredGoal('');
              }}
            />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '80%',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '60%',
  },
  button: {
    width: '30%',
  },
});

export default GoalInput;
