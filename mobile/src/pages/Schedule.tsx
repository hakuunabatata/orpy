import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import styles from "../styles";
import examples from "../examples";
import { useNavigation } from "@react-navigation/native";

const Schedule: React.FC = () => {
    const navigation = useNavigation();
    const { events } = examples;

    return (
        <>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Schedule</Text>
            </View>
            <ScrollView style={styles.scheduleContainer}>
                {events.map((event) => (
                    <TouchableOpacity
                        key={event.idEvent}
                        style={styles.scheduleEvent}
                        onPress={() => navigation.navigate("Event")}
                    >
                        <View style={styles.scheduleEventImageContainer}>
                            <Image
                                style={styles.scheduleEventImage}
                                source={require("../../assets/users/2.png")}
                            ></Image>
                        </View>
                        <Text style={styles.scheduleEventTitle}>
                            {event.name}
                        </Text>
                        <Text style={styles.scheduleEventDescription}>
                            {event.description}
                        </Text>
                        <View style={styles.scheduleEventInfo}>
                            <FontAwesome
                                name="location-arrow"
                                size={30}
                                style={styles.scheduleEventInfoIcon}
                            />
                            <Text style={styles.scheduleEventInfoText}>
                                {event.location}
                            </Text>
                            <AntDesign
                                name="clockcircle"
                                size={30}
                                style={styles.scheduleEventInfoIcon}
                            />
                            <Text style={styles.scheduleEventInfoText}>
                                {event.date}
                            </Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </>
    );
};

export default Schedule;
