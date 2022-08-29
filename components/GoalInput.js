import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal, Image, Platform } from "react-native";

export default function GoalInput({ onAddGoalHandler }) {
  const [goal, setGoal] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  function toggleAddGoalModal() {
    setIsModalVisible(!isModalVisible);
  }

  function goalInputHandler (text) {
    setGoal(text);
  }

  function onSubmitGoalHandler () {
    onAddGoalHandler(goal);
    setGoal('');
    toggleAddGoalModal();
  }

  return (
    <View>
      <Button 
        title='Add New Goal'
        color='#5e0acc'
        onPress={toggleAddGoalModal}
      />
      <Modal visible={isModalVisible} animationType='slide'>
        <View style={styles.inputContainer}>
        <Image source={{ uri: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" }} style={styles.image}/>
          <TextInput
            defaultValue={goal}
            placeholder="Your course goal"
            style={styles.textInput}
            onChangeText={goalInputHandler}
            onSubmitEditing={onSubmitGoalHandler}
          />
          <View style={styles.modalActions}>
            <View style={styles.actionButton}>
              <Button
                title='Add goal'
                onPress={onSubmitGoalHandler}
                color={Platform.OS === 'ios' ? '#b180f0' : '#5e0acc'}
              />
            </View>
            <View style={styles.actionButton}>
              <Button
                title='Cancel'
                onPress={toggleAddGoalModal}
                color='#f31282'  
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
};

const styles = StyleSheet.create({
    inputContainer: {
        height: '100%',
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        backgroundColor: '#311b6b'
    },
    image: {
      width: 200,
      height: 200,
      margin: 20
    },
    textInput: {
        padding: 15,
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '90%',
    },
    modalActions: {
      marginTop: 20,
      flexDirection: 'row'
    },
    actionButton: {
      width: '40%',
      marginHorizontal: 8,
      borderRadius: 15,
    }
});