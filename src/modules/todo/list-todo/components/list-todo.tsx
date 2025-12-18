import { View, StyleSheet } from 'react-native';

import { FilterStatus } from '../types/filter-status';
import { FilterList } from './filter-list';

export function ListTodo() {
  return (
    <View style={styles.content}>
      <FilterList status={FilterStatus.DONE} isActive />
      <FilterList status={FilterStatus.PENDING} isActive={false} />
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
