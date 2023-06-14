import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login.jsx";
import Home from "../screens/Home.jsx";

const Stack = createStackNavigator();

export default function MainStackNavigator () {
    return(
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        </Stack.Navigator>
        )
};