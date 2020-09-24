import { StyleSheet } from "react-native";
import { Colors } from "../../Constants/Constants";
const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: "row-reverse",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: Colors.primary,
    paddingVertical: 20,
    borderRadius: 50,
    position: "absolute",
    bottom: "2%",
    right: "3%",
    left: "3%",
  },
});

export default styles;
