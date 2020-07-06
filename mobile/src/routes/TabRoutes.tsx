import React from "react";
import { NavigationContainer, useIsFocused } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
    AntDesign,
    MaterialCommunityIcons,
    Feather,
    FontAwesome,
} from "@expo/vector-icons";

import Home from "../pages/Home";
import Search from "../pages/Search";
import Talks from "../pages/Talks";
import Schedule from "../pages/Schedule";

import styles from "../styles";

const TabNavigation = createBottomTabNavigator();

const Tabs: React.FC = () => (
    <>
        <TabNavigation.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                showIcon: true,
                showLabel: false,
                style: styles.tabBar,
                tabStyle: styles.tab,
                labelStyle: styles.tabLabel,

                activeTintColor: styles.default.color,
                inactiveTintColor: styles.default.borderColor,
                safeAreaInsets: { bottom: 0, top: 0 },
            }}
        >
            <TabNavigation.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        const isFocused = useIsFocused();

                        return isFocused ? (
                            <MaterialCommunityIcons
                                name="home-variant"
                                size={35}
                                style={styles.tabIconFocused}
                            />
                        ) : (
                            <MaterialCommunityIcons
                                name="home-variant"
                                style={styles.tabIcon}
                                size={25}
                                color={color}
                            />
                        );
                    },
                }}
            ></TabNavigation.Screen>
            <TabNavigation.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        const isFocused = useIsFocused();

                        return isFocused ? (
                            <FontAwesome
                                name="search"
                                size={35}
                                color={color}
                            />
                        ) : (
                            <FontAwesome
                                name="search"
                                size={25}
                                color={color}
                            />
                        );
                    },
                }}
            ></TabNavigation.Screen>
            <TabNavigation.Screen
                name="Talks"
                component={Talks}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        const isFocused = useIsFocused();

                        return isFocused ? (
                            <MaterialCommunityIcons
                                name="message"
                                size={35}
                                color={color}
                            />
                        ) : (
                            <MaterialCommunityIcons
                                name="message"
                                size={25}
                                color={color}
                            />
                        );
                    },
                }}
            ></TabNavigation.Screen>
            <TabNavigation.Screen
                name="Schedule"
                component={Schedule}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        const isFocused = useIsFocused();

                        return isFocused ? (
                            <AntDesign
                                name="clockcircle"
                                size={35}
                                color={color}
                            />
                        ) : (
                            <AntDesign
                                name="clockcircle"
                                size={25}
                                color={color}
                            />
                        );
                    },
                }}
            ></TabNavigation.Screen>
        </TabNavigation.Navigator>
    </>
);

export default Tabs;
