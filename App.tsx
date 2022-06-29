import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./src/navigator/index";
import Home from "./src/screens/home";
import { View } from "react-native";
import Leaderboard from "./src/screens/leaderboard";

export default function App() {
  return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
  );
}
//mAIN CONTAINER
