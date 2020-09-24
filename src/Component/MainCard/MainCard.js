import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "../../Constants/Constants";
import Button from "../Button/Button";
import Card from "../Card/Card";
import DefaultText from "../DefaultText/DefaultText";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
import mainCard from "../../FakeData/mainCard";
const MainCard = () => {
  return (
    <View>
      {mainCard.map((item, index) => {
        return (
          <Card key={index.toString()} styleCard={styles.containCard}>
            <View style={styles.containImage}>
              <Image source={item.img} style={styles.image} />
              <Image source={item.logo} style={styles.logo} />
              <View style={styles.overlay} />
            </View>
            <View style={styles.bodyCard}>
              <DefaultText textStyle={styles.titleCard}>
                {item.title}
              </DefaultText>
              <View style={styles.containDetails}>
                <DefaultText textStyle={styles.label}>التاريخ</DefaultText>
                <DefaultText textStyle={styles.textCard}>
                  {item.date}
                </DefaultText>
                <DefaultText textStyle={styles.label}>الوقت</DefaultText>
                <DefaultText textStyle={styles.textCard}>
                  {item.time}
                </DefaultText>
                <DefaultText textStyle={styles.label}>الموقع</DefaultText>
                <DefaultText textStyle={styles.textCard}>
                  {item.location}
                </DefaultText>
              </View>
              <View style={styles.containButtons}>
                <Button
                  title="موافقة"
                  TextColor={Colors.secondary}
                  borderColor={Colors.secondary}
                  styleButton={styles.confirmBtn}
                  containButton={{ flex: 0.38 }}
                  borderWidth={2}
                />
                <Button
                  title="رفض"
                  TextColor={Colors.semiGray}
                  borderColor={Colors.semiGray}
                  styleButton={styles.confirmBtn}
                  borderWidth={2}
                  containButton={{ flex: 0.38 }}
                />
                <TouchableOpacity
                  style={{
                    paddingVertical: 2,
                    flex: 0.2,
                    borderRadius: 10,
                    borderWidth: 2,
                    borderColor: Colors.semiGray,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FontAwesome5
                    name="ellipsis-h"
                    style={{ color: Colors.semiGray, fontSize: 24 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </Card>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  containCard: {
    flexDirection: "row-reverse",
    marginVertical: 10,
  },
  containImage: {
    borderRadius: 20,
    overflow: "hidden",
    width: 140,
    position: "relative",
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 0,
    backgroundColor: Colors.secondary + 43,
  },
  image: {
    position: "absolute",
    zIndex: -1,
    width: "100%",
    height: "100%",
  },
  logo: {
    position: "absolute",
    zIndex: 1,
    bottom: "-10%",
    left: "1%",
    width: 100,
    height: 180,
    resizeMode: "contain",
  },
  bodyCard: {
    paddingVertical: 10,
    paddingRight: 15,
    paddingLeft: 15,
    flex: 1,
  },
  titleCard: {
    color: Colors.secondary,
    flex: 0.5,
    fontSize: 17,
    marginTop: 5,
  },
  containDetails: {
    marginVertical: 5,
  },
  label: {
    color: Colors.primary,
    fontSize: 12,
  },
  textCard: {
    color: Colors.semiGray,
    fontSize: 12,
    textAlign: "right",
  },
  containButtons: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    marginVertical: 5,
  },
  confirmBtn: {
    flex: 0.7,
    paddingVertical: 2,
    width: "100%",
  },
});

export default MainCard;
