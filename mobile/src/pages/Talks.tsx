import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import styles from "../styles";
import examples from "../examples";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

interface Talk {
    id: Number;
    name: String;
    preview: String;
    type: String;
}

const Talks: React.FC = () => {
    const navigation = useNavigation();
    const { friends, events } = examples;
    const eventsRes = events.map((item) => ({
        id: item.idEvent,
        name: item.name,
        preview: "Jaspion: Msg Preview longa pra ver se cabe tudo",
        type: "Event",
    }));
    const friendsRes = friends.map((item) => ({
        id: item.idUser,
        name: item.name,
        preview: "Msg Preview longa pra ver se cabe tudo",
        type: "People",
    }));
    const talks = [...eventsRes, ...friendsRes];

    return (
        <>
            <View style={styles.talkContainer}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Talks</Text>
                </View>
                <ScrollView>
                    {talks.map((talk) => (
                        <TouchableOpacity
                            key={`${talk.type}-${talk.id}`}
                            style={styles.talk}
                            onPress={() => navigation.navigate("Talk")}
                        >
                            <Image
                                style={styles.talkImage}
                                source={require("../../assets/users/4.png")}
                            ></Image>
                            <View style={styles.talkText}>
                                <Text style={styles.talkTitle}>
                                    {talk.name}
                                </Text>
                                <Text style={styles.talkPreview}>
                                    {talk.preview}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </>
    );
};

export default Talks;
