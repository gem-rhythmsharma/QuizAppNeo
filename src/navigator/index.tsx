import { createStackNavigator } from "@react-navigation/stack";
import CongratsScreen from "../screens/CongratsScreen";
import Home from "../screens/home";
import Leaderboard from "../screens/leaderboard";
import Quiz from "../screens/quiz";
import ViewAnswers from "../screens/ViewAnswers";
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
        name="Quiz"
        component={Quiz}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Leaderboard"
        component={Leaderboard}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CongratsScreen"
        component={CongratsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ViewAnswers"
        component={ViewAnswers}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
