import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

import { FilterStatus } from '../types/filter-status';
import { StatusIcon } from './status-icon';

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE];

type FiltersProps = {
  activeFilter: FilterStatus | null;
  changeFilter: (filter: FilterStatus | null) => void;
};

export function Filters({ activeFilter, changeFilter }: FiltersProps) {
  const handleChangeFilter = (filter: FilterStatus) => {
    changeFilter(filter);
  };

  const handleClearFilter = () => changeFilter(null);

  return (
    <View style={styles.container}>
      {FILTER_STATUS.map(filter => {
        const isActive = activeFilter === filter;

        return (
          <TouchableOpacity
            key={filter}
            style={[
              styles.filterBntContainer,
              isActive && styles.filterBntActive,
            ]}
            activeOpacity={0.8}
            onPress={() => handleChangeFilter(filter)}
          >
            <StatusIcon status={filter} />
            <Text style={styles.filterBntTitle}>
              {filter === FilterStatus.DONE ? 'Comprados' : 'Pendentes'}
            </Text>
          </TouchableOpacity>
        );
      })}

      <TouchableOpacity
        style={styles.clearButton}
        onPress={() => handleClearFilter()}
      >
        <Text style={styles.clearText}>Limpar</Text>
      </TouchableOpacity>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e4e6ec',
    paddingBottom: 12,
  },
  filterBntContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    padding: 8,
    borderRadius: 8,
    borderColor: '#e4e6ec',
    gap: 6,
    opacity: 0.5,
  },
  filterBntActive: {
    opacity: 1,
    borderColor: '#999',
    borderWidth: 1,
  },
  filterBntTitle: {
    fontSize: 12,
    fontWeight: 600,
  },
  clearButton: {
    marginLeft: 'auto',
  },
  clearText: {
    fontSize: 12,
    color: '#444',
    fontWeight: 600,
  },
});
