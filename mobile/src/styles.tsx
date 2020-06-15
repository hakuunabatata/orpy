import React from "react";
import { StyleSheet } from "react-native";

const orpyColor = "#3a920e";
const bkgColor = "#222222";
const secondColor = "#ffffff";
const secondBkgColor = "#000000";
const defaultFont = "OpenSans_300Light";
const boldFont = "OpenSans_600SemiBold";

const styles = StyleSheet.create({
    empty: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: bkgColor,
    },
    default: {
        color: orpyColor,
        backgroundColor: bkgColor,
        borderColor: secondColor,
        fontFamily: defaultFont,
    },
    container: {
        backgroundColor: secondBkgColor,
    },
    welcomeContainer: {},
    welcome: {
        color: orpyColor,
        fontSize: 40,
        fontFamily: defaultFont,
    },
    friendsContainer: {
        padding: 10,
    },
    userImage: {
        borderRadius: 30,
        height: 60,
        width: 60,
        marginHorizontal: 5,
        color: orpyColor,
    },
    user: {},
    text: { color: orpyColor },
    tab: {
        backgroundColor: bkgColor,
        fontFamily: defaultFont,
    },
    tabLabel: {
        color: secondColor,
        fontFamily: defaultFont,
        fontSize: 8,
        paddingBottom: 5,
    },
    tabBar: {
        backgroundColor: bkgColor,
        padding: 0,
        height: 60,
    },
    userName: {
        color: secondColor,
        fontFamily: defaultFont,
        fontSize: 10,
        textAlign: "center",
        width: 70,
        height: 15,
    },
    logoContainer: {
        backgroundColor: bkgColor,
        color: orpyColor,
        padding: 10,
    },
    logo: {
        resizeMode: "contain",
        height: 40,
        width: 100,
    },
    category: {
        marginHorizontal: 10,
        backgroundColor: secondBkgColor,
    },
    categoryTitle: {
        fontSize: 20,
        fontFamily: boldFont,
        color: secondColor,
        paddingTop: 40,
        paddingBottom: 20,
    },
    eventContainer: {},
    eventPreview: {
        // backgroundColor: bkgColor,
        alignItems: "center",
        width: 150,
        borderRadius: 10,
        margin: 5,
    },
    eventPreviewImg: {
        height: 150,
        width: 150,
        borderRadius: 10,
    },
    eventPreviewTitle: {
        marginTop: 20,
        color: secondColor,
        fontFamily: boldFont,
        width: 140,
        height: 40,
        textAlign: "left",
    },
    eventPreviewDesc: {
        fontFamily: defaultFont,
        color: secondColor,
        fontSize: 10,
        width: 140,
        height: 30,
    },
    findMore: {
        alignItems: "center",
        justifyContent: "center",
        width: 150,
        borderRadius: 10,
        margin: 5,
        backgroundColor: bkgColor,
    },
    findMoreIcon: {
        color: orpyColor,
    },
    findMoreText: {
        marginTop: 20,
        color: orpyColor,
        fontFamily: boldFont,
        fontSize: 24,
        width: 140,
        height: 40,
        textAlign: "center",
    },
    people: {
        backgroundColor: bkgColor,
        alignItems: "center",
        width: 150,
        borderRadius: 10,
        marginHorizontal: 5,
        paddingTop: 10,
    },
    peopleImage: {
        height: 120,
        width: 120,
        borderRadius: 60,
    },
    peopleName: {
        marginTop: 20,
        color: secondColor,
        fontFamily: boldFont,
        width: 140,
        height: 40,
        textAlign: "center",
    },
    addButton: {
        marginVertical: 20,
        width: 130,
        height: 30,
        justifyContent: "center",
        borderRadius: 10,
        backgroundColor: orpyColor,
    },
    addButtonText: {
        textAlign: "center",
        color: secondColor,
        fontFamily: boldFont,
    },
    singleEvent: {
        padding: 0,
        flex: 1,
        backgroundColor: bkgColor,
        paddingTop: 20,
        borderRadius: 10,
    },
    singleEventImageContainer: {
        alignItems: "center",
    },
    singleEventImage: {
        borderRadius: 10,
        width: 300,
        height: 250,
    },
    singleEventTitle: {
        textAlign: "center",
        color: secondColor,
        fontFamily: boldFont,
        fontSize: 20,
        height: 60,
        padding: 10,
    },
    singleEventDescription: {
        color: secondColor,
        fontFamily: defaultFont,
        padding: 10,
        fontSize: 10,
    },
    singleEventInfo: {
        flexDirection: "row",
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    singleEventInfoText: {
        color: orpyColor,
        width: 100,
        fontFamily: defaultFont,
    },
    singleEventInfoIcon: {
        color: orpyColor,
        padding: 20,
    },
    mapPreviewContainer: {
        flex: 1,
        height: 300,
        borderRadius: 10,
        overflow: "hidden",
    },
    mapPreview: {
        height: 300,
        borderRadius: 100,
    },
    mapPreviewSubtitle: {
        backgroundColor: bkgColor,
        height: 100,
    },
    mapPreviewMarker: {
        alignItems: "center",
    },
    mapPreviewTextContainer: {
        backgroundColor: bkgColor,
        borderRadius: 5,
        width: 110,
        alignItems: "center",
    },
    mapPreviewText: {
        textAlign: "center",
        fontSize: 10,
        width: 100,
        fontFamily: boldFont,
        color: secondColor,
    },
    mapPreviewImage: {
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    smileContainer: { alignItems: "center", padding: 30 },
    smile: {
        color: orpyColor,
    },
    smileText: { color: orpyColor, padding: 20 },
});

export default styles;
