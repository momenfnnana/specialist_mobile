import { StyleSheet, Dimensions } from "react-native";
const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;
import { Colors } from "../../Constants/Constants";

const styles = StyleSheet.create({
  Headercontainer: {
    width: SCREEN_WIDTH,
  },
  HeaderImageBackground: {
    width: SCREEN_WIDTH,
    height: 150,
    top: "-7%",
    justifyContent: "flex-end",
  },
  Headertitle: {
    color: Colors.white,
    fontSize: 21,
    fontFamily: "ArbFONTS-Montserrat-Arabic-Regular",
    alignSelf: "center",
    marginBottom: "5%",
  },
  HeaderBackButton: {
    position: "absolute",
    right: "5%",
    top: "-15%",
  },
});

export default styles;
