import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
    Foundation,
    AntDesign,
    MaterialIcons,
    Entypo,
    Feather
} from '@expo/vector-icons'

import Home from './pages/Home'
import Search from './pages/Search'
import Talks from './pages/Talks'
import Schedule from './pages/Schedule'

import styles from './styles'

const Tabs = createBottomTabNavigator()

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
                    safeAreaInsets: { bottom: 0, top: 0 }
                }}
            >
                <Tabs.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Foundation name="home" size={20} color={color} />
                        )
                    }}
                ></Tabs.Screen>
                <Tabs.Screen
                    name="Search"
                    component={Search}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <AntDesign name="search1" size={20} color={color} />
                        )
                    }}
                ></Tabs.Screen>
                <Tabs.Screen
                    name="Talks"
                    component={Talks}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Feather
                                name="message-circle"
                                size={20}
                                color={color}
                            />
                        )
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
                        )
                    }}
                ></Tabs.Screen>
                
            </Tabs.Navigator>
        </NavigationContainer>
    </>
)

export default Routes
