import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/home";
import WelcomeScreen from "./screens/welcomeScreen";
import RecipeDetailsScreen from "./screens/recipeDetailScreen";
import { useFocusEffect } from "@react-navigation/native";
import { StatusBar } from "react-native";
const Stack = createStackNavigator();

export default App = () => {


	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Home"
				
				screenOptions={{
					cardStyle: { backgroundColor: "#FFFFFF" },
				
				}}
			>
				<Stack.Screen
					name="Home"
					component={Home}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name="WelcomeScreen"
					component={WelcomeScreen}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name="RecipeDetailsScreen"
					component={RecipeDetailsScreen}
					options={{
						headerShown: false,
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};
