import { View, Text, StyleSheet, Pressable } from "react-native";

export default function GoalItem({ id, title, onDeleteItem }) {

  function onPressHandler () {
    onDeleteItem(id);
  }

  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={onPressHandler}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalItemText}>{title}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc'
    },
    goalItemText: {
        padding: 8,
        color: 'white'
    },
    pressedItem: {
      backgroundColor: '#5e0acd'
    }
})