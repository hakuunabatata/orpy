import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { OpenSans_600SemiBold } from "@expo-google-fonts/open-sans";
import styles from "../styles";

const Search = () => (
  <>
    <View style={styles.empty}>
      <Text style={styles.text}>Your Search will appear here</Text>
    </View>
  </>
);

export default Search;
