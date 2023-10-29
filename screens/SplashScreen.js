import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const SplashScreen = () => {
  return (
    <View style={styles.splashScreen}>
      <View style={[styles.splashScreenChild, styles.splashLayout]} />
      <LinearGradient
        style={[styles.splashScreenItem, styles.splashLayout]}
        locations={[0, 1]}
        colors={["rgba (255, 255, 255, 0.6)", "rgba(255, 255, 255, 0.4)"]}
        useAngle={true}
        angle={97.06}
      />
      <Image
        //style={[styles.maskGroupIcon, styles.maskGroupIconPosition]}
        resizeMode="cover"
        //source={require("../assets/mask-group2.png")}
      />
      <Text style={styles.clockwise}>ClockWise</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  splashLayout: {
    opacity: 0,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  maskGroupIconPosition: {
    left: "0%",
    right: "0%",
    width: "100%",
  },
  splashScreenChild: {
    height: "1.72%",
    top: "102.83%",
    bottom: "4.56%",
    backgroundColor: Color.colorDarkslategray_200,
    left: "0%",
    right: "0%",
    width: "100%",
  },
  splashScreenItem: {
    height: "16.13%",
    width: "91.47%",
    top: "106.53%",
    right: "4.27%",
    bottom: "-22.66%",
    left: "4.27%",
    backgroundColor: Color.linear,
  },
  maskGroupIcon: {
    height: "100%",
    top: "0%",
    bottom: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  clockwise: {
    top: "15.76%",
    left: "12.8%",
    fontSize: FontSize.size_37xl,
    fontWeight: "700",
    fontFamily: FontFamily.oxygenBold,
    color: Color.white,
    textAlign: "left",
    position: "absolute",
  },
  splashScreen: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default SplashScreen;
