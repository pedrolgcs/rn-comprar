import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
} from 'react-native';

type ButtonProps = TouchableOpacityProps;

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8} {...rest}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
}

export const styles = StyleSheet.create({
  container: {
    gap: 8,
    backgroundColor: '#2c46b1',
    height: 48,
    width: '100%',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 600,
  },
});
