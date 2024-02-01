import { StyleSheet } from "react-native";
import { Colors } from "../Contants/Colors";


export const globalStyles = StyleSheet.create({
    screenContainer:{
        flex:1,
        backgroundColor:Colors.primaryColor,
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
        fontSize:32,
        fontWeight:'bold',
        color:Colors.details,
    },
    botton:{
        backgroundColor: 'transparent', 
        borderColor: Colors.dark, 
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 18,
        paddingVertical: 8,
        marginBottom:'1%'
    },
    inputContainer:{
    flex:1,
    backgroundColor:Colors.primaryColor,
   
    }
})