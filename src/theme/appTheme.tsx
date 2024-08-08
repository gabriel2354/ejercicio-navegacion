import { StyleSheet } from "react-native";
import { IMPUT_COLOR, PRIMARY_COLOR, SECUNDARY_COLOR } from '../components/constantsColor';


export const styles = StyleSheet.create({
    buttonAcceder: {
       
        top:350,
        color: PRIMARY_COLOR,
        fontSize: 27,
        paddingHorizontal: 90,
        paddingVertical: 30,
        fontWeight: 'bold',
    
        
    },
    textoInicio: {
        top:-350,
        fontSize:40
    },
     
    imagen: {
        
        flex:1,
        top: -250,
        width: -350,
        height: 600,
        


    },

    inputTexto: {
        backgroundColor: IMPUT_COLOR,
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius:10
    },
    contentInput: {
        marginTop:30,
        gap:10

    },
    buttonD: {
        backgroundColor:PRIMARY_COLOR,
        paddingVertical:20,
        borderRadius:30,
        marginTop:40,
        fontSize:45,
        paddingHorizontal:180
        

    },
    
       
     

    
   
});