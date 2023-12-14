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
        color:Colors.gray,
    }
})