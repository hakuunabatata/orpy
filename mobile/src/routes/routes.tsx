import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../pages/Login";
import Tabs from "./TabRoutes";

const StackNavigation = createStackNavigator();

const getAuth = () => {
    // const AuthToken = "sdhriughsrigushruihsdvnjrg";
    const AuthToken = null;
    return AuthToken ? "Tabs" : "Login";
};

const Stack: React.FC = () => (
    <>
        <NavigationContainer>
            <StackNavigation.Navigator
                initialRouteName={getAuth()}
                screenOptions={{ headerShown: false }}
            >
                <StackNavigation.Screen name="Login" component={Login} />
                <StackNavigation.Screen name="Tabs" component={Tabs} />
            </StackNavigation.Navigator>
        </NavigationContainer>
    </>
);

export default Stack;
