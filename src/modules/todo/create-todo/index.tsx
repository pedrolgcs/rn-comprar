import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { View } from "react-native";

import { styles } from './styles'

export function CreateTodo() {
  return (
    <View style={styles.form}>
      <Input placeholder='Sua compra' />
      <Button>Adicionar +</Button>
    </View>
  )
}