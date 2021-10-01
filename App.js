import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Categories from "./screens/Categories/Categories";
import Details from "./screens/Details/Details";
import Meals from "./screens/Meals/Meals";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Categories}
        screenOptions={{
          headerTitleAlign:"center"
        }}
      >
        <Stack.Screen
          name="Categories"
          component={Categories}
        />
        <Stack.Screen
          name="Meals"
          component={Meals}
        />
        <Stack.Screen
          name="Details"
          component={Details}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
