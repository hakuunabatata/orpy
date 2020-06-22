import React from "react";
import { View, Text } from "react-native";
import styles from "../styles";

const Schedule = () => (
    <>
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Schedule</Text>
        </View>
        <View style={styles.empty}>
            <Text style={styles.text}>Your Schedule will appear here</Text>
        </View>
    </>
);

export default Schedule;
