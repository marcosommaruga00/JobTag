import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { TransitionSpecs } from "@react-navigation/stack";
import Login from "../screens/Login.jsx";
import Home from "../screens/Home.jsx";
import Prova from "../screens/Prova.jsx";
import Notification from "../screens/Notification.jsx";
import Settings from "../screens/Settings.jsx";
import Qrcode from "../screens/Qrcode.jsx";

const Stack = createStackNavigator();

export default function MainStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false, animationEnabled: true, animationTypeForReplace: "pop" }} />
      <Stack.Screen name="Prova" component={Prova} options={{ headerShown: false, animationEnabled: false, }} />
      <Stack.Screen name="Notification" component={Notification} options={{ headerShown: false}}/>
      <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false, animationEnabled: true }} />
      <Stack.Screen name="Qrcode" component={Qrcode} options={{
            headerShown: false,
            cardStyleInterpolator: ({ current: { progress } }) => {
              return {
                cardStyle: {
                  transform: [
                    {
                      translateX: progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [-400, 0],
                        extrapolate: 'clamp',
                      }),
                    },
                  ],
                },
                overlayStyle: {
                  opacity: progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 0.5],
                    extrapolate: 'clamp',
                  }),
                },
              };
            },
          }}
        />
    </Stack.Navigator>
  );
}
