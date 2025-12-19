import { View, StyleSheet } from 'react-native';

import { Filters } from './filters';
import { useState } from 'react';
import { TodoStatus } from '@/entities/todo';
import { TodoItem } from './todo-item';
import { useAppStore } from '@/storage';

export function ListTodo() {
  const [filter, setFilter] = useState<TodoStatus | null>(TodoStatus.DONE);

  const todos = useAppStore(state => state.todos);

  return (
    <View style={styles.content}>
      <Filters activeFilter={filter} changeFilter={setFilter} />

      {todos.map(todo => {
        return <TodoItem key={todo.id} data={todo} />;
      })}
    </View>
  );
}

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
  },
});
