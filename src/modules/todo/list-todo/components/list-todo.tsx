import { View, StyleSheet, FlatList, Text } from 'react-native';

import { Filters } from './filters';
import { useMemo, useState } from 'react';
import { TodoStatus } from '@/entities/todo';
import { TodoItem } from './todo-item';
import { useAppStore } from '@/storage';

export function ListTodo() {
  const [filter, setFilter] = useState<TodoStatus | null>(null);

  const todos = useAppStore(state => state.todos);

  const filteredTodos = useMemo(() => {
    if (!filter) return todos;
    return todos.filter(todo => todo.status === filter);
  }, [filter, todos]);

  return (
    <View style={styles.content}>
      <Filters activeFilter={filter} changeFilter={setFilter} />

      <FlatList
        data={filteredTodos}
        renderItem={({ item }) => <TodoItem data={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.list__separator} />}
        contentContainerStyle={styles.list}
        ListEmptyComponent={() => (
          <Text style={styles.list__emptyText}>Nenhum item aqui.</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
  },
  list: {
    paddingVertical: 12,
  },
  list__separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#EEF0F5',
    marginVertical: 8,
  },
  list__emptyText: {
    fontSize: 14,
    color: '#808080',
    textAlign: 'center',
  },
});
