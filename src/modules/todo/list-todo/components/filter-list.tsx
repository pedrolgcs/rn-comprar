import {
  Text,
  TouchableOpacity,
  type TouchableOpacityProps,
  StyleSheet,
} from 'react-native';

import { FilterStatus } from '../types/filter-status';
import { StatusIcon } from './status-icon';

type FilterListProps = TouchableOpacityProps & {
  status: FilterStatus;
  isActive: boolean;
};

export function FilterList({ status, isActive, ...rest }: FilterListProps) {
  return (
    <TouchableOpacity
      style={[styles.container, { opacity: isActive ? 1 : 0.5 }]}
      activeOpacity={0.8}
      {...rest}
    >
      <StatusIcon status={status} />
      <Text style={styles.title}>
        {status === FilterStatus.DONE ? 'Comprados' : 'Pendentes'}
      </Text>
    </TouchableOpacity>
  );
}

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  title: {
    fontSize: 12,
    fontWeight: 600,
  },
});
