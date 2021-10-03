// React Navigation Libaries
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

// Screen Imports
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";

const screens = {
  Login: {
    screen: LoginScreen,
  },
  SignUp: {
    screen: SignUpScreen,
  },
  // Susie's screen here
};

// Create screen navigator
const navigator = createStackNavigator(screens, {
  initialRouteName: "Login",
});

export default createAppContainer(navigator);
