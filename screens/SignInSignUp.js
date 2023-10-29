import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";

import morning1 from "../assets/morning1.jpg";

export default function SignInSignUp() {
  return (
    // <ImageBackground
    //   style={styles.background}
    //   source={morning1} // Replace with the path to your background image
    // >
    <View style={styles.container}>
      <Image style={styles.image} source={morning1} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Let's get connected to</Text>
        <Text style={styles.appName}>ClockWise</Text>
        <Text style={styles.subtitle}>for a great start to your day...</Text>
        <Text style={styles.description}>
          Enjoy the most efficient way of waking up for your busy lifestyle.
        </Text>
        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
    // </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    // paddingHorizontal: 20,
    backgroundColor: "#2B2B2B",
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: "20%",
  },
  title: {
    fontSize: 24,
    color: "#fff",
    textAlign: "center",
  },
  appName: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    marginBottom: 30,
  },
  signInButton: {
    backgroundColor: "#FF69B4", // Pink color, adjust as needed
    padding: 15,
    minWidth: "80%",
    borderRadius: 10,
    marginBottom: 15,
    alignItems: "center",
  },
  signUpButton: {
    backgroundColor: "rgba(255, 255, 255, 0.3)", // Semi-transparent white
    padding: 15,
    minWidth: "80%",
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
  image: {
    height: "40%",
    resizeMode: "contain",
  },
});
