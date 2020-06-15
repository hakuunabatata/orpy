import React from "react";
import { StatusBar } from "react-native";
import Routes from "./src/routes";
import { AppLoading } from "expo";
import {
    OpenSans_300Light,
    OpenSans_600SemiBold,
    useFonts,
} from "@expo-google-fonts/open-sans";

export default function App() {
    const [fontsLoaded] = useFonts({
        OpenSans_300Light,
        OpenSans_600SemiBold,
    });

    return !fontsLoaded ? (
        <AppLoading />
    ) : (
        <>
            <StatusBar />
            <Routes />
        </>
    );
}
