import { View, StyleSheet } from 'react-native';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PlusIcon } from 'lucide-react-native';

export function CreateTodo() {
  return (
    <View style={styles.form}>
      <Input placeholder="Sua compra" />
      <Button text="Adicionar" icon={<PlusIcon size={18} color="#fff" />} />
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
