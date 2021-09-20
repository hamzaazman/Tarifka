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
      <Stack.Navigator initialRouteName={Categories}>
        <Stack.Screen
          name="Categories"
          component={Categories}
          options={{
            headerTintColor: "#fea500",
            headerTitleAlign: "center",
            headerTitleStyle: { fontWeight: "bold" },
          }}
        />
        <Stack.Screen
          name="Meals"
          component={Meals}
          options={{
            headerTintColor: "#fea500",
            headerTitleAlign: "center",
            headerTitleStyle: { fontWeight: "bold" },
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerTintColor: "#fea500",
            headerTitleAlign: "center",
            headerTitleStyle: { fontWeight: "bold" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
