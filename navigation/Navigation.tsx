import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "../screens/MainScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={MainScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}
