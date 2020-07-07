import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { FontAwesome, AntDesign, Entypo } from "@expo/vector-icons";
import styles from "../styles";
import MapView, { Marker } from "react-native-maps";

import examples from "../examples";
import { useNavigation } from "@react-navigation/native";

const { friends, events, categories } = examples;

const Home: React.FC = () => {
    const navigation = useNavigation();

    return (
        <>
            <View style={styles.header}>
                <Image
                    style={styles.logo}
                    source={require("../../assets/logo.png")}
                />
                <TouchableOpacity onPress={() => navigation.navigate("New")}>
                    <AntDesign
                        name="pluscircleo"
                        size={25}
                        style={styles.headerIcon}
                    />
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.container}>
                <ScrollView
                    horizontal
                    showsVerticalScrollIndicator={false}
                    style={styles.friendsContainer}
                >
                    {friends.map((user) => (
                        <TouchableOpacity
                            key={user.idUser}
                            style={styles.user}
                            onPress={() => navigation.navigate("User")}
                        >
                            <View>
                                <Image
                                    style={styles.userImage}
                                    source={require("../../assets/users/0.png")}
                                ></Image>
                                <Text style={styles.userName}>{user.name}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                    <TouchableOpacity style={styles.user}>
                        <View>
                            <Entypo
                                name="circle-with-plus"
                                size={60}
                                style={styles.userImage}
                            />
                            <Text style={styles.userName}>Add More</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
                {categories.map((category) => {
                    return (
                        <View key={category.id} style={styles.category}>
                            <Text style={styles.categoryTitle}>
                                {category.name}
                            </Text>
                            {category.type === "events" ? (
                                <ScrollView
                                    horizontal
                                    style={styles.eventContainer}
                                >
                                    {events.map((event) => (
                                        <TouchableOpacity
                                            key={event.idEvent}
                                            style={styles.eventPreview}
                                            onPress={() =>
                                                navigation.navigate("Event")
                                            }
                                        >
                                            <Image
                                                style={styles.eventPreviewImg}
                                                source={require("../../assets/users/4.png")}
                                            ></Image>
                                            <Text
                                                style={styles.eventPreviewTitle}
                                            >
                                                {event.name}
                                            </Text>
                                            <Text
                                                style={styles.eventPreviewDesc}
                                            >
                                                {event.creator} -{" "}
                                                {event.location}
                                            </Text>
                                        </TouchableOpacity>
                                    ))}
                                    <TouchableOpacity
                                        style={styles.findMore}
                                        onPress={() =>
                                            navigation.navigate("Search")
                                        }
                                    >
                                        <View>
                                            <Entypo
                                                name="circle-with-plus"
                                                size={60}
                                                style={styles.findMoreIcon}
                                            ></Entypo>
                                        </View>
                                        <Text style={styles.findMoreText}>
                                            Find More
                                        </Text>
                                    </TouchableOpacity>
                                </ScrollView>
                            ) : category.type === "people" ? (
                                <ScrollView
                                    horizontal
                                    style={styles.peopleContainer}
                                >
                                    {friends.map((friend) => (
                                        <View
                                            style={styles.people}
                                            key={friend.idUser}
                                        >
                                            <TouchableOpacity
                                                style={
                                                    styles.peopleInfoContainer
                                                }
                                                onPress={() =>
                                                    navigation.navigate("User")
                                                }
                                            >
                                                <Image
                                                    source={require("../../assets/users/3.png")}
                                                    style={styles.peopleImage}
                                                ></Image>
                                                <Text style={styles.peopleName}>
                                                    {friend.name}
                                                </Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                                style={styles.addButton}
                                            >
                                                <Text
                                                    style={styles.addButtonText}
                                                >
                                                    Adicionar
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                    ))}
                                </ScrollView>
                            ) : category.type === "location" ? (
                                <View style={styles.mapPreviewContainer}>
                                    <MapView
                                        style={styles.mapPreview}
                                        initialRegion={{
                                            latitude: -23.1516977,
                                            longitude: -46.9611307,
                                            latitudeDelta: 0.014,
                                            longitudeDelta: 0.014,
                                        }}
                                    >
                                        {events.map((event) => (
                                            <Marker
                                                style={styles.mapPreviewMarker}
                                                key={event.idEvent}
                                                coordinate={{
                                                    latitude:
                                                        event.coordinate
                                                            .latitude,
                                                    longitude:
                                                        event.coordinate
                                                            .longitude,
                                                }}
                                                onPress={() =>
                                                    navigation.navigate("Event")
                                                }
                                            >
                                                <View
                                                    style={
                                                        styles.mapPreviewTextContainer
                                                    }
                                                >
                                                    <Text
                                                        style={
                                                            styles.mapPreviewText
                                                        }
                                                    >
                                                        {event.name}
                                                    </Text>
                                                </View>

                                                <Image
                                                    style={
                                                        styles.mapPreviewImage
                                                    }
                                                    source={require("../../assets/users/1.png")}
                                                ></Image>
                                            </Marker>
                                        ))}
                                    </MapView>
                                </View>
                            ) : category.type === "single" ? (
                                <TouchableOpacity
                                    style={styles.singleEvent}
                                    onPress={() => navigation.navigate("Event")}
                                >
                                    <View
                                        style={styles.singleEventImageContainer}
                                    >
                                        <Image
                                            style={styles.singleEventImage}
                                            source={require("../../assets/users/2.png")}
                                        ></Image>
                                    </View>
                                    <Text style={styles.singleEventTitle}>
                                        {events[0].name}
                                    </Text>
                                    <Text style={styles.singleEventDescription}>
                                        {events[0].description}
                                    </Text>
                                    <View style={styles.singleEventInfo}>
                                        <FontAwesome
                                            name="location-arrow"
                                            size={30}
                                            style={styles.singleEventInfoIcon}
                                        />
                                        <Text
                                            style={styles.singleEventInfoText}
                                        >
                                            {events[0].location}
                                        </Text>
                                        <AntDesign
                                            name="clockcircle"
                                            size={30}
                                            style={styles.singleEventInfoIcon}
                                        />
                                        <Text
                                            style={styles.singleEventInfoText}
                                        >
                                            {events[0].date}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            ) : (
                                <View />
                            )}
                        </View>
                    );
                })}
                <View style={styles.smileContainer}>
                    <Text style={styles.smileText}>
                        You saw Everything Until Now!
                    </Text>
                    <Entypo style={styles.smile} name="emoji-flirt" size={50} />
                </View>
            </ScrollView>
        </>
    );
};

export default Home;
