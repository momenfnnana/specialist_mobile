import React from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import styles from "./FooterStyle";
import {
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
  Feather,
  Entypo,
} from "@expo/vector-icons";
import { Colors } from "../../Constants/Constants";
const Footer = ({ myNavigation, styleProps, screenName }) => {
  const navigation = myNavigation;
  return (
    <View style={StyleSheet.flatten([styles.footerContainer, styleProps])}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        {screenName === "home" ? (
          <MaterialIcons name="home" size={34} color={Colors.secondary} />
        ) : (
          <MaterialCommunityIcons
            name="home-outline"
            size={34}
            color={Colors.white}
          />
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Centers")}>
        <Entypo
          name="calendar"
          size={30}
          color={screenName === "centers" ? Colors.secondary : Colors.white}
        />
        {/* {screenName === "centers" ? (
          <MaterialCommunityIcons
            name="view-grid"
            size={30}
            color={Colors.secondary}
          />
        ) : (
          <Feather name="grid" size={29} color={Colors.white} />
        )} */}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <FontAwesome5
          name={screenName === "profile" ? "user-alt" : "user"}
          size={27}
          color={screenName === "profile" ? Colors.secondary : Colors.white}
        />
      </TouchableOpacity>
    </View>
  );
};
export default Footer;
