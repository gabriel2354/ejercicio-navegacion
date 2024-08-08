import React, { useState, } from 'react'
import {  View} from 'react-native'
import InputComponet from '../components/InputComponet';
import { styles } from '../theme/appTheme';
import ButtonComponet from '../components/ButtonComponet';
import { Float } from 'react-native/Libraries/Types/CodegenTypes';




const Pantalla2Screens = () => {
  const [formnumero, setFormNumero,  ]= useState({
    numero1:'',
    numero2:'',
    resultado:''

  });
  const hadlerSetValues = (name: Float, value:Float) => {

    setFormNumero({...formnumero,[name]: value});
  }

  const actionButtonDivivir = () =>{
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);

    if(num1 === 0){
      if (num2 === 0) {
        setFormNumero('INDETERMINACION');
      } else {
        setFormNumero('NO EXISTE DIVISION PARA CERO')
      }
    } else {
      const res = num1/num2;
      setFormNumero(`El resultado de la division es : ${res}`);
    }
  }
}

  




  return (
      <View style={styles.contentInput}>
            <InputComponet placeholder='ingrese primer dato' hadlerSetValue={hadlerSetValues} name='numero1'/>
            <InputComponet placeholder='ingrese segundo dato' hadlerSetValue={hadlerSetValues} name='numero2'/>
            <InputComponet placeholder='Resultado' hadlerSetValue={hadlerSetValues} name='resultado'/>
    <View>
            <ButtonComponet actionButton={actionButtonDividir} />

    </View>

      </View>

  
  
  
  
  )
}

export default Pantalla2Screens
