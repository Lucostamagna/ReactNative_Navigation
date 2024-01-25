import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./MyStack";
import MyBottomTab from "./MyBottomTab";
import SingUp from "../Screens/AuthScreens/SingUp";

export default function RootNavigator (){
    return <SingUp/>
//     (
//         <NavigationContainer>
//             <MyStack />
//             {/* <MyBottomTab/> */}
//         </NavigationContainer>
//     )
}