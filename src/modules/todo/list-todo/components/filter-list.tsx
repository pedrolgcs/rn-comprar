import { Text, TouchableOpacity, type TouchableOpacityProps, StyleSheet } from 'react-native'
import { CircleCheck } from 'lucide-react-native'
import { FilterStatus } from '../types/filter-status'

type FilterListProps = TouchableOpacityProps & {
  status: FilterStatus
  isActive: boolean
}

export function FilterList({ status, isActive, ...rest }: FilterListProps) {
  return (
    <TouchableOpacity 
      style={[
        styles.container,
        {opacity: isActive ? 1 : 0.5}
      ]}
      activeOpacity={0.8}
      {...rest}
    >
      <CircleCheck size={18} color="#000" />
      <Text style={styles.title}>
        {status === FilterStatus.DONE ? "Comprados" : "Pendentes"}
      </Text>
    </TouchableOpacity>
  )
}

export const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 12,
    fontWeight: 600
  }
});