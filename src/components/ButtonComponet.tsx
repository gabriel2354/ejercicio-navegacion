import React from 'react'
import { Text, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from '../theme/appTheme';

interface Props {
  actionButtonDividir: () => void;
}

const ButtonComponet = ({actionButtonDividir}: Props) => {
  return (
   <TouchableOpacity
   onPress={actionButtonDividir}
style={styles.buttonD}>
    <Text>Dividir</Text>
   </TouchableOpacity>
  )
}

export default ButtonComponet
