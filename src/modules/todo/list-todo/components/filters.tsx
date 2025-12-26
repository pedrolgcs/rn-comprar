import { Text, TouchableOpacity, StyleSheet, View, Alert } from 'react-native';
import { TodoStatus } from '@/entities/todo';

import { StatusIcon } from './status-icon';
import { Trash2Icon } from 'lucide-react-native';
import { useAppStore } from '@/storage';

const FILTER_STATUS: TodoStatus[] = [TodoStatus.PENDING, TodoStatus.DONE];

type FiltersProps = {
  activeFilter: TodoStatus | null;
  changeFilter: (filter: TodoStatus) => void;
};

export function Filters({ activeFilter, changeFilter }: FiltersProps) {
  const todos = useAppStore(state => state.todos);

  const isEmptyList = todos.length === 0;

  const clearTodos = useAppStore(state => state.clearTodos);

  const handleClearTodos = () => {
    Alert.alert('Limpar lista', 'Deseja remover todos os itens da lista ?', [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      { text: 'OK', onPress: () => clearTodos() },
    ]);
  };

  return (
    <View style={styles.filters}>
      {FILTER_STATUS.map(filter => {
        const isActive = activeFilter === filter;

        return (
          <TouchableOpacity
            key={filter}
            style={[
              styles.filters__item,
              isActive && styles['filters__item--active'],
            ]}
            activeOpacity={0.8}
            onPress={() => changeFilter(filter)}
          >
            <StatusIcon status={filter} />
            <Text style={styles.filters__itemText}>
              {filter === TodoStatus.DONE ? 'Comprados' : 'Pendentes'}
            </Text>
          </TouchableOpacity>
        );
      })}

      <TouchableOpacity
        style={[
          styles.filters__clearButton,
          isEmptyList && styles['filters__clearButton--disabled'],
        ]}
        onPress={() => handleClearTodos()}
        disabled={todos.length === 0}
      >
        <Text style={styles.filters__clearText}>Limpar</Text>
        <Trash2Icon size={18} color="#e17100" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  filters: {
    width: '100%',
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e4e6ec',
    paddingBottom: 12,
  },

  filters__item: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    padding: 8,
    borderRadius: 8,
    borderColor: '#e4e6ec',
    gap: 6,
    opacity: 0.5,
  },

  'filters__item--active': {
    opacity: 1,
    borderColor: '#999',
    borderWidth: 1,
  },

  filters__itemText: {
    fontSize: 12,
    fontWeight: '600',
  },

  filters__clearButton: {
    marginLeft: 'auto',
    padding: 8,
    gap: 6,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#e17100',
    flexDirection: 'row',
  },
  'filters__clearButton--disabled': {
    opacity: 0.4,
  },
  filters__clearText: {
    fontSize: 12,
    color: '#e17100',
    fontWeight: '600',
  },
});
