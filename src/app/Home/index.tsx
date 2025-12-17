import {  Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CreateTodo } from '@/modules/todo/create-todo';
import { styles } from './styles'
import { ListTodo } from '@/modules/todo/list-todo';

export function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />
        
        <CreateTodo />

        <ListTodo />
      </View>
    </SafeAreaView>
  );
}
