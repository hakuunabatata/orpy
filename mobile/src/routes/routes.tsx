import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../pages/Login";
import Tabs from "./TabRoutes";
import Signup from "../pages/Signup";
import New from "../pages/New";
import Event from "../pages/Event";
import User from "../pages/User";
import Talk from "../pages/Talk";

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
                <StackNavigation.Screen name="Signup" component={Signup} />
                <StackNavigation.Screen name="New" component={New} />
                <StackNavigation.Screen name="Event" component={Event} />
                <StackNavigation.Screen name="User" component={User} />
                <StackNavigation.Screen name="Talk" component={Talk} />
            </StackNavigation.Navigator>
        </NavigationContainer>
    </>
);

export default Stack;
