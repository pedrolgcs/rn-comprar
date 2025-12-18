import type { ReactNode } from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
  Text,
} from 'react-native';

type ButtonProps = TouchableOpacityProps & {
  text?: string;
  icon?: ReactNode;
};

export function Button({ text, icon, style, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      activeOpacity={0.8}
      {...rest}
    >
      {text && <Text style={styles.text}>{text}</Text>}
      {icon && icon}
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
    flexDirection: 'row',
  },
  text: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 600,
  },
});
