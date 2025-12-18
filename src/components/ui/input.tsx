import { TextInput, TextInputProps, StyleSheet } from 'react-native';

type InputProps = TextInputProps;

export function Input(props: InputProps) {
  return <TextInput {...props} style={styles.container} />;
}

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    height: 48,
    width: '100%',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#C3C5CB',
  },
});
