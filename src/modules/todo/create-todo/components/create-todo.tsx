import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { PlusIcon } from 'lucide-react-native';
import { toast } from 'sonner-native';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAppStore } from '@/storage';

export function CreateTodo() {
  const [title, setTitle] = useState('');

  const addTodo = useAppStore(state => state.addTodo);

  const handleAddTodo = () => {
    if (!title) {
      toast.error('É necessário preencher a compra');
      return;
    }

    addTodo(title);
    toast.success('Compra adicionada com sucesso!');
    setTitle('');
  };

  return (
    <View style={styles.form}>
      <Input placeholder="Sua compra" value={title} onChangeText={setTitle} />

      <Button
        text="Adicionar"
        icon={<PlusIcon size={18} color="#fff" />}
        onPress={handleAddTodo}
      />
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
