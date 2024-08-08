import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { styles } from '../theme/appTheme';
import {  Float } from 'react-native/Libraries/Types/CodegenTypes';

interface Props{
  placeholder: string;
  hadlerSetValue: (name:Float, value:Float) => void;
  name: Float

  
 

}
const InputComponet = ({placeholder, hadlerSetValue, name }: Props) => {
  return (
    <TextInput
    placeholder={placeholder}
    keyboardType='numeric'
    onChangeText={(value) => hadlerSetValue(name, value)}
    
    style={ styles.inputTexto }
    
    />
  )
}

export default InputComponet
