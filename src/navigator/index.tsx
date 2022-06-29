import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import Leaderboard from "../screens/leaderboard";
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Leaderboard"
        component={Leaderboard}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
