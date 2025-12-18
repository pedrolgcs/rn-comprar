import { Image, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CreateTodo } from '@/modules/todo/create-todo';
import { ListTodo } from '@/modules/todo/list-todo';
import { images } from '@/assets';

export function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image source={images.logo} style={styles.logo} />
        <CreateTodo />
        <ListTodo />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 30,
    alignItems: 'center',
    backgroundColor: '#d4d4d4',
    paddingTop: 30,
  },
  logo: {
    height: 34,
    width: 134,
  },
});
