import { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, FlatList } from 'react-native';

export default function ExploreScreen() {
  // Состояние для добавленных задач
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([
    { id: '1', text: 'Пример задачи 1', isCompleted: false },
    { id: '2', text: 'Пример задачи 2', isCompleted: false },
  ]);

  // Функция для добавления задачи
  const addTask = () => {
    if (task.trim()) {
      setTasks([
        ...tasks,
        { id: Math.random().toString(), text: task, isCompleted: false },
      ]);
      setTask('');
    }
  };

  // Функция для удаления задачи
  const markTaskAsCompleted = (taskId: string) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Добавить задачу</Text>
      <TextInput
        style={styles.input}
        placeholder="Введите задачу"
        value={task}
        onChangeText={setTask}
      />
      <Button title="Добавить задачу" onPress={addTask} />

      {/* Добавляем отступ между кнопкой и списком */}
      <View style={styles.spacing} />

      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <Text style={styles.taskText}>{item.text}</Text>
            {!item.isCompleted && (
              <Button
                title="Выполнено"
                onPress={() => markTaskAsCompleted(item.id)}
              />
            )}
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#DEEFA7',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  spacing: {
    marginBottom: 20,  // Отступ между кнопкой и списком
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  taskText: {
    fontSize: 18,
  },
});
