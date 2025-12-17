import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { styles } from './styles'

type ButtonProps = TouchableOpacityProps

export function Button({ children, activeOpacity, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.container} 
      activeOpacity={0.8} 
      {...rest}
    >
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  )
}