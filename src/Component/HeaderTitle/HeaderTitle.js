import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import styles from "./HeaderTitleStyle";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "../../Constants/Constants";
const HeaderTitle = ({ title, backButtonVisible, goBack, propsStyle }) => {
  return (
    <SafeAreaView
      style={StyleSheet.flatten([styles.Headercontainer, propsStyle])}
    >
      <ImageBackground
        style={styles.HeaderImageBackground}
        source={require("../../../assets/images/HeaderTitle.png")}
      >
        <View>
          <Text style={styles.Headertitle}>{title}</Text>
          {backButtonVisible === true ? (
            <TouchableOpacity onPress={goBack} style={styles.HeaderBackButton}>
              <AntDesign name="arrowright" size={24} color={Colors.white} />
            </TouchableOpacity>
          ) : null}
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default HeaderTitle;
