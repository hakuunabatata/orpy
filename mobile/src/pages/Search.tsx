import React, { useState, useEffect } from "react";
import { View, Text, Image, TextInput, ScrollView } from "react-native";
import styles from "../styles";
import examples from "../examples";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

interface Result {
    id: Number;
    name: String;
    type: String;
    infos?: ResultInfo;
}

interface ResultInfo {
    date: String;
    location: String;
}

const Search: React.FC = () => {
    const navigation = useNavigation();
    const { friends, events, categories } = examples;
    const [searchRes, setSearchRes] = useState<Result[]>([]);

    function getSearchResults(searchText: string) {
        const eventsRes = events.map((item) => ({
            id: item.idEvent,
            name: item.name,
            infos: {
                date: item.date,
                location: item.location,
            },
            type: "Event",
        }));
        const friendsRes = friends.map((item) => ({
            id: item.idUser,
            name: item.name,
            type: "User",
        }));
        setSearchRes([...eventsRes, ...friendsRes]);
    }

    return (
        <>
            <View style={styles.searchContainer}>
                {/* <Text style={styles.searchTitle}>Search</Text> */}
                <View style={styles.header}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search"
                        onChange={(text) => getSearchResults(String(text))}
                    />
                </View>

                {searchRes.length > 0 ? (
                    <ScrollView style={styles.resultContainer}>
                        {searchRes.map((item) => (
                            <TouchableOpacity
                                key={`${item.type}-${item.id}`}
                                onPress={() =>
                                    navigation.navigate(String(item.type))
                                }
                            >
                                <View style={styles.searchResult}>
                                    <Image
                                        style={
                                            item.type === "Event"
                                                ? styles.resultEventImage
                                                : styles.resultPeopleImage
                                        }
                                        source={require("../../assets/users/4.png")}
                                    ></Image>
                                    <View
                                        style={styles.searchResultTextContainer}
                                    >
                                        <Text style={styles.searchResultTitle}>
                                            {item.name}
                                        </Text>
                                        <Text style={styles.searchResultInfos}>
                                            {`${item.type} ${
                                                item.type === "Event"
                                                    ? `- ${
                                                          item.infos?.date.split(
                                                              " - "
                                                          )[0]
                                                      } - ${
                                                          item.infos?.location
                                                      }`
                                                    : ""
                                            }`}
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                ) : (
                    <View style={styles.resultEmptyContainer}>
                        <Text style={styles.resultEmptyText}>
                            Find a Event or a New Friend
                        </Text>
                    </View>
                )}
            </View>
        </>
    );
};

export default Search;
