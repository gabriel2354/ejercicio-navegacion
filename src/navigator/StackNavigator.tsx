import { createStackNavigator } from '@react-navigation/stack';
import Pantalla1Screens from '../screens/Pantalla1Screens';
import Pantalla2Screens from '../screens/Pantalla2Screens ';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inicio" component={Pantalla1Screens} />
      <Stack.Screen name="Ejercicio" component={Pantalla2Screens} />
      
    </Stack.Navigator>
  );
}