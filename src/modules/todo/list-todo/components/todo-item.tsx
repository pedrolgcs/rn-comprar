import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import type { Todo } from '@/entities/todo';
import { StatusIcon } from './status-icon';
import { Trash2Icon } from 'lucide-react-native';
import { useAppStore } from '@/storage';

type TodoItemProps = {
  data: Todo;
};

export function TodoItem({ data }: TodoItemProps) {
  const toggleTodo = useAppStore(state => state.toggleTodo);
  const removeTodo = useAppStore(state => state.removeTodo);

  return (
    <View style={styles.todo}>
      <TouchableOpacity activeOpacity={0.8} onPress={() => toggleTodo(data.id)}>
        <StatusIcon status={data.status} />
      </TouchableOpacity>

      <Text style={styles.todo__title}>{data.title}</Text>

      <TouchableOpacity onPress={() => removeTodo(data.id)}>
        <Trash2Icon size={18} color="#828282" />
      </TouchableOpacity>
    </View>
  );
}

export const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  todo__title: {
    flex: 1,
    fontSize: 14,
    fontWeight: 600,
  },
});
