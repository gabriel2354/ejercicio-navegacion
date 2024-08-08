import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Button, Image, Text, View,  ImageBackground } from 'react-native';
import { styles } from '../theme/appTheme';

const image = {uri: 'https://img.freepik.com/psd-gratis/telefono-movil-moderno-mano-mujer-sobre-fondo-blanco_1142-53263.jpg'};

interface Props extends StackScreenProps<any, any> {

}
const Pantalla1Screens = ({ navigation }: Props) => {


  return (

    
    <View style={styles.buttonAcceder}>
        <Text style={styles.textoInicio}>BIENVENIDO</Text>
        <ImageBackground source={image} resizeMode="cover" style={styles.imagen}>
      
    </ImageBackground> 
          
        <Button 
        title='Acceder'
        onPress={() => navigation.navigate('Ejercicio') }/>


    </View>
    
    
  )
}

    
export default Pantalla1Screens


 

 
      
   


