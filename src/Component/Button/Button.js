import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
const Button = ({
  backgroundColor,
  borderColor,
  borderWidth,
  TextColor,
  title,
  onPress,
  alignSelf,
  containButton,
  styleButton,
  styleText,
}) => {
  return (
    <View style={containButton}>
      <TouchableOpacity
        style={[
          styles.ButtonContainer,
          {
            backgroundColor: backgroundColor,
            borderColor: borderColor,
            borderWidth: borderWidth,
            alignSelf: alignSelf,
            ...styleButton,
          },
        ]}
        onPress={onPress}
      >
        <Text style={[styles.ButtonTitle, { color: TextColor, ...styleText }]}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const SCREEN_WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
  ButtonContainer: {
    width: SCREEN_WIDTH / 1.1,
    paddingVertical: "5%",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: "2%",
  },
  ButtonTitle: {
    fontSize: 15,
    fontFamily: "ArbFONTS-Montserrat-Arabic-Regular",
  },
});

export default Button;
