import { View, StyleSheet } from 'react-native';

import { FilterStatus } from '../types/filter-status';
import { Filters } from './filters';
import { useState } from 'react';

export function ListTodo() {
  const [filter, setFilter] = useState<FilterStatus | null>(FilterStatus.DONE);

  return (
    <View style={styles.content}>
      <Filters activeFilter={filter} changeFilter={setFilter} />
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
