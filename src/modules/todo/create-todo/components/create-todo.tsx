import { View, StyleSheet } from 'react-native';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function CreateTodo() {
  return (
    <View style={styles.form}>
      <Input placeholder="Sua compra" />
      <Button>Adicionar +</Button>
    </View>
  );
}

export const styles = StyleSheet.create({
  form: {
    width: '100%',
    gap: 12,
    paddingHorizontal: 24,
  },
});
