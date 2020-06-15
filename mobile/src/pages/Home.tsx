import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { FontAwesome, AntDesign, Entypo } from "@expo/vector-icons";
import styles from "../styles";

const Username = `User`;
const friends = [
  {
    idUser: 0,
    name: "Jaspion Nazista",
  },
  {
    idUser: 1,
    name: "Dog Tantão",
  },
  {
    idUser: 2,
    name: "Macaco Louco",
  },
  {
    idUser: 3,
    name: "Bolsonaro",
  },
  {
    idUser: 4,
    name: "Osama Bin Sama Bin Awad Bin Suraio Bin Bin Bin",
  },
  {
    idUser: 5,
    name: "Kleber BamBam",
  },
];
const events = [
  {
    idEvent: 0,
    name: "Dançar tudo Nu com Dedo no Cú",
    creator: "Jaspion Nazista",
    location:
      "Casa do Culto ao Poderoso Jaspion Nazifascista da União Sovietica",
    date: "31/12 - 20:00",
    description:
      "Vamo dançar tudo Nú com de do no cu menos eu, tudo com a bunda de fora é agora, voce Disse que dava e não deu.",
  },
  {
    idEvent: 1,
    name: "Assistir a saga Crepusculo Comendo Tapioca",
    creator: "Dog Tantão",
    location: "Casa do Culto ao NaziJaspion",
    date: "31/12 - 20:00",
    description:
      "Vamo dançar tudo Nú com de do no cu menos eu, tudo com a bunda de fora é agora, voce Disse que dava e não deu.",
  },
  {
    idEvent: 2,
    name: "Vender sua Mãe no mercado Livre",
    creator: "Macaco Louco",
    location: "Casa do Culto ao NaziJaspion",
    date: "31/12 - 20:00",
    description:
      "Vamo dançar tudo Nú com de do no cu menos eu, tudo com a bunda de fora é agora, voce Disse que dava e não deu.",
  },
  {
    idEvent: 3,
    name: "Aniversario de 50 anos de Teodoro e Sampaio",
    creator: "Bolsonaro",
    location: "Casa do Culto ao NaziJaspion",
    date: "31/12 - 20:00",
    description:
      "Vamo dançar tudo Nú com de do no cu menos eu, tudo com a bunda de fora é agora, voce Disse que dava e não deu.",
  },
  {
    idEvent: 4,
    name: "Culto ao Jaspion Nazista",
    creator: "Osama Bin Sama Bin Awad Bin Suraio Bin Bin Bin",
    location: "Casa do Culto ao NaziJaspion",
    date: "31/12 - 20:00",
    description:
      "Vamo dançar tudo Nú com de do no cu menos eu, tudo com a bunda de fora é agora, voce Disse que dava e não deu.",
  },
  {
    idEvent: 5,
    name: "Acabou a criatividade",
    creator: "Kleber BamBam",
    location: "Casa do Culto ao NaziJaspion",
    date: "31/12 - 20:00",
    description:
      "Vamo dançar tudo Nú com de do no cu menos eu, tudo com a bunda de fora é agora, voce Disse que dava e não deu.",
  },
];
const categories = [
  { id: 0, name: "Suggested to Me", type: "single" },
  { id: 1, name: "More Suggestions", type: "events" },
  { id: 2, name: "Where my friends will be", type: "events" },
  { id: 3, name: "Who Could Be My Friend", type: "people" },
  { id: 4, name: "Next to Me", type: "location" },
  { id: 5, name: "My Events", type: "events" },
];

const Home = () => (
  <>
    <View style={styles.logoContainer}>
      <Image style={styles.logo} source={require("../../assets/logo.png")} />
    </View>
    <ScrollView style={styles.container}>
      <ScrollView
        horizontal
        showsVerticalScrollIndicator={false}
        style={styles.friendsContainer}
      >
        {friends.map((user) => (
          <TouchableOpacity key={user.idUser} style={styles.user}>
            <View>
              <Image
                style={styles.userImage}
                source={require(`../../assets/users/0.png`)}
              ></Image>
              <Text style={styles.userName}>{user.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      {categories.map((category) => {
        return (
          <View key={category.id} style={styles.category}>
            <Text style={styles.categoryTitle}>{category.name}</Text>
            {category.type === "events" ? (
              <ScrollView horizontal style={styles.eventContainer}>
                {events.map((event) => (
                  <View key={event.idEvent} style={styles.eventPreview}>
                    <Image
                      style={styles.eventPreviewImg}
                      source={require(`../../assets/users/4.png`)}
                    ></Image>
                    <Text style={styles.eventPreviewTitle}>{event.name}</Text>
                    <Text style={styles.eventPreviewDesc}>
                      {event.creator} - {event.location}
                    </Text>
                  </View>
                ))}
                <View style={styles.findMore}>
                  <View>
                    <Entypo
                      name="circle-with-plus"
                      size={60}
                      style={styles.findMoreIcon}
                    ></Entypo>
                  </View>
                  <Text style={styles.findMoreText}>Find More</Text>
                </View>
              </ScrollView>
            ) : category.type === "people" ? (
              <ScrollView horizontal>
                {friends.map((friend) => (
                  <View style={styles.people} key={friend.idUser}>
                    <Image
                      source={require("../../assets/users/3.png")}
                      style={styles.peopleImage}
                    ></Image>
                    <Text style={styles.peopleName}>{friend.name}</Text>
                    <View style={styles.addButton}>
                      <Text style={styles.addButtonText}>Adicionar</Text>
                    </View>
                  </View>
                ))}
              </ScrollView>
            ) : category.type === "location" ? (
              <View />
            ) : category.type === "single" ? (
              <View style={styles.singleEvent}>
                <View style={styles.singleEventImageContainer}>
                  <Image
                    style={styles.singleEventImage}
                    source={require("../../assets/users/2.png")}
                  ></Image>
                </View>
                <Text style={styles.singleEventTitle}>{events[0].name}</Text>
                <Text style={styles.singleEventDescription}>
                  {events[0].description}
                </Text>
                <View style={styles.singleEventInfo}>
                  <FontAwesome
                    name="location-arrow"
                    size={30}
                    style={styles.singleEventInfoIcon}
                  />
                  <Text style={styles.singleEventInfoText}>
                    {events[0].location}
                  </Text>
                  <AntDesign
                    name="clockcircle"
                    size={30}
                    style={styles.singleEventInfoIcon}
                  />
                  <Text style={styles.singleEventInfoText}>
                    {events[0].date}
                  </Text>
                </View>
              </View>
            ) : (
              <View />
            )}
          </View>
        );
      })}
    </ScrollView>
    {/* <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcome}>Hello, {Username}!</Text>
      </View>
    </View> */}
  </>
);

export default Home;
