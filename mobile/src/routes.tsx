import React from "react";
import { Image, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import {
    Foundation,
    FontAwesome,
    AntDesign,
    MaterialIcons,
    Entypo,
} from "@expo/vector-icons";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Friends from "./pages/Friends";
import New from "./pages/New";
import Schedule from "./pages/Schedule";

import styles from "./styles";

const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

const Routes = () => (
    <>
        <NavigationContainer>
            <Tabs.Navigator
                initialRouteName="Home"
                tabBarOptions={{
                    showIcon: true,
                    showLabel: true,
                    style: styles.tabBar,
                    tabStyle: styles.tab,
                    labelStyle: styles.tabLabel,
                    activeTintColor: styles.default.color,
                    inactiveTintColor: styles.default.borderColor,
                    safeAreaInsets: { bottom: 0, top: 0 },
                }}
            >
                <Tabs.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Foundation name="home" size={20} color={color} />
                        ),
                    }}
                ></Tabs.Screen>
                <Tabs.Screen
                    name="Search"
                    component={Search}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <AntDesign name="search1" size={20} color={color} />
                        ),
                    }}
                ></Tabs.Screen>
                <Tabs.Screen
                    name="Friends"
                    component={Friends}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons
                                name="people"
                                size={20}
                                color={color}
                            />
                        ),
                    }}
                ></Tabs.Screen>
                <Tabs.Screen
                    name="Schedule"
                    component={Schedule}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <AntDesign
                                name="calendar"
                                size={20}
                                color={color}
                            />
                        ),
                    }}
                ></Tabs.Screen>
                <Tabs.Screen
                    name="New"
                    component={New}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Entypo
                                name="circle-with-plus"
                                size={20}
                                color={color}
                            />
                        ),
                    }}
                ></Tabs.Screen>
            </Tabs.Navigator>
        </NavigationContainer>
    </>
);

export default Routes;
