import React from "react";
import { View, Text, TextInput, Image } from "react-native";
import styles from "../styles";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Login: React.FC = () => {
    const navigation = useNavigation();

    function login() {
        navigation.navigate("Tabs");
    }

    function signup() {
        navigation.navigate("Signup");
    }

    return (
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
                <RectButton style={styles.loginButton} onPress={() => login()}>
                    <Text style={styles.loginButtonText}> Submit </Text>
                </RectButton>
                <View style={styles.signUpContainer}>
                    <Text style={styles.signUpText}>
                        Don't have an acoount ?
                    </Text>
                    <RectButton onPress={() => signup()}>
                        <Text style={styles.signUpClick}> Click Here!!!</Text>
                    </RectButton>
                </View>
            </View>
        </>
    );
};

export default Login;
