import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { AlarmHomeScreen, LoginScreen, SignInSignUp, SplashScreen } from "./screens/index";
import { AppRegistry } from "react-native";

const Stack = createStackNavigator();
// AppRegistry.registerComponent("ClockWise", () => App);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignInSignUp">
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignInSignUp" component={SignInSignUp} options={{ headerShown: false }} />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
          // options={{ headerShown: true, headerBackTitleVisible: false, headerTitle: "", headerStyle: { backgroundColor: "#2B2B2B" } }}
        />
        <Stack.Screen name="AlarmHomeScreen" component={AlarmHomeScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
