import { View, StyleSheet, Alert } from 'react-native';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PlusIcon } from 'lucide-react-native';
import { useAppStore } from '@/storage';
import { useState } from 'react';

export function CreateTodo() {
  const [title, setTitle] = useState('');

  const addTodo = useAppStore(state => state.addTodo);

  const handleAddTodo = () => {
    if (!title) {
      Alert.alert('Atenção', 'É necessário preencher da sua compra', [
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed'),
        },
      ]);

      return;
    }

    addTodo(title);
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
