import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { OpenSans_600SemiBold } from "@expo-google-fonts/open-sans";
import styles from "../styles";

const New = () => (
    <>
        <View style={styles.empty}>
            <Text style={styles.text}>You will create a new Event here</Text>
        </View>
    </>
);

export default New;
