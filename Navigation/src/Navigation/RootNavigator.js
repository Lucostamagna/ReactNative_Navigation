import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./MyStack";
import MyBottomTab from "./MyBottomTab";
import SingUp from "../Screens/AuthScreens/SingUp";
import AuthStack from "./AuthStack";

export default function RootNavigator (){
    const user = true
    return (
         <NavigationContainer>

             {/* <MyStack />       */}
             <AuthStack/>     
        </NavigationContainer>
     )
}