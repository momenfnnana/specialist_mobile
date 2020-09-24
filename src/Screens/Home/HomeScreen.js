import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import HeaderTitle from "../../Component/HeaderTitle/HeaderTitle";
import Footer from "../../Component/Footer/Footer";
import Card from "../../Component/Card/Card";
import { Colors, Constant } from "../../Constants/Constants";
import DefaultText from "../../Component/DefaultText/DefaultText";
import MainCard from "../../Component/MainCard/MainCard";
const HomeScreen = () => {
  const [appointment, setAppointment] = useState("all");
  return (
    <View style={{ flex: 1, width: "100%" }}>
      <HeaderTitle title="الرئيسية" propsStyle={styles.header} />
      <ScrollView style={{ flex: 1 }}>
        <View style={{ paddingHorizontal: 20 }}>
          <Card
            backgroundColor="#fff"
            styleCard={{ marginTop: "25%", borderRadius: 12 }}
          >
            <TouchableOpacity style={styles.cardBtn}>
              <View>
                <DefaultText textStyle={styles.statusText}>الحالة</DefaultText>
                <DefaultText textStyle={styles.status}>نشط الآن</DefaultText>
              </View>
              <View style={styles.activeCircle} />
            </TouchableOpacity>
          </Card>
          <DefaultText textStyle={styles.headingLine}>المواعيد</DefaultText>
          <View style={styles.containTime}>
            <TouchableOpacity onPress={() => setAppointment("all")}>
              <DefaultText
                textStyle={[
                  styles.timeText,
                  {
                    color:
                      appointment === "all" ? Colors.primary : Colors.semiGray,
                  },
                ]}
              >
                الكل
              </DefaultText>
              {appointment === "all" && <View style={styles.borderBottom} />}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setAppointment("pending")}>
              <DefaultText
                textStyle={[
                  styles.timeText,
                  {
                    color:
                      appointment === "pending"
                        ? Colors.primary
                        : Colors.semiGray,
                  },
                ]}
              >
                المعلقة
              </DefaultText>
              {appointment === "pending" && (
                <View style={styles.borderBottom} />
              )}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setAppointment("current")}>
              <DefaultText
                textStyle={[
                  styles.timeText,
                  {
                    color:
                      appointment === "current"
                        ? Colors.primary
                        : Colors.semiGray,
                  },
                ]}
              >
                الجارية
              </DefaultText>
              {appointment === "current" && (
                <View style={styles.borderBottom} />
              )}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setAppointment("next")}>
              <DefaultText
                textStyle={[
                  styles.timeText,
                  {
                    color:
                      appointment === "next" ? Colors.primary : Colors.semiGray,
                  },
                ]}
              >
                القادمة
              </DefaultText>
              {appointment === "next" && <View style={styles.borderBottom} />}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setAppointment("previous")}>
              <DefaultText
                textStyle={[
                  styles.timeText,
                  {
                    color:
                      appointment === "previous"
                        ? Colors.primary
                        : Colors.semiGray,
                  },
                ]}
              >
                السابقة
              </DefaultText>
              {appointment === "previous" && (
                <View style={styles.borderBottom} />
              )}
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 20, marginBottom: "25%" }}>
            <MainCard />
          </View>
        </View>
      </ScrollView>
      <Footer screenName="home" />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    top: "-5.5%",
    zIndex: 10,
  },
  cardBtn: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 7,
    alignItems: "center",
  },
  statusText: {
    marginBottom: 5,
    fontSize: 15,
    color: Colors.secondary,
  },
  status: {
    fontSize: 13,
    color: Colors.semiGray,
  },
  activeCircle: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: Colors.green,
  },
  headingLine: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 17,
    color: Colors.secondary,
  },
  timeText: {
    fontSize: 16,
    color: Colors.semiGray,
    marginBottom: 5,
  },
  borderBottom: {
    height: 3,
    width: 25,
    backgroundColor: Colors.primary,
    alignSelf: "center",
  },
  containTime: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
export default HomeScreen;
