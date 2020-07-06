import React from "react";
import { View, Text, TextInput, Image } from "react-native";
import styles from "../styles";
import { TouchableOpacity } from "react-native-gesture-handler";

const Login: React.FC = () => (
    <>
        <View style={styles.loginContainer}>
            <Image
                source={require("../../assets/icon.png")}
                style={styles.loginLogo}
            />
            <TextInput style={styles.loginInput} placeholder="Login" />
            <TextInput
                style={styles.loginInput}
                placeholder="Password"
                secureTextEntry={true}
            />
            <TouchableOpacity style={styles.loginButton} onPress={() => {}}>
                <Text style={styles.loginButtonText}> Submit </Text>
            </TouchableOpacity>
        </View>
    </>
);

export default Login;
