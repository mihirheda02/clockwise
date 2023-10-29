import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, TouchableWithoutFeedback, Keyboard } from "react-native";

import google from "../assets/google.png";
import apple from "../assets/apple.jpg";
import facebook from "../assets/facebook.png";

export default LoginScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Hey There!!</Text>
        <Text style={styles.subtitleText}>Welcome back!! You've been missed!</Text>

        <TextInput style={styles.inputField} placeholder="Enter Username" placeholderTextColor={"white"} />
        <TextInput style={styles.inputField} placeholder="Password" placeholderTextColor={"white"} secureTextEntry={true} />
        <TouchableOpacity style={styles.recoverButton}>
          <Text style={styles.recoverText}>Recover Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>

        <View style={styles.socialButtons}>
          <TouchableOpacity style={styles.button}>
            <Image source={apple} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image source={google} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image source={facebook} style={styles.icon} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.signupText}>Don't have an account? Signup</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2B2B2B",
    alignItems: "center",
    padding: 20,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginTop: 100,
  },
  subtitleText: {
    fontSize: 18,
    color: "#FFFFFF",
    marginTop: 10,
    marginBottom: 30,
  },
  inputField: {
    width: "100%",
    padding: 15,
    marginBottom: 10,
    backgroundColor: "#454545",
    borderRadius: 5,
    color: "#FFFFFF",
    fontSize: 16,
  },
  recoverButton: {
    alignSelf: "flex-end",
    marginBottom: 20,
  },
  recoverText: {
    fontSize: 16,
    color: "#FFFFFF",
  },
  signInButton: {
    width: "100%",
    padding: 15,
    backgroundColor: "#FF69B4",
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 20,
  },
  signInText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  socialButtons: {
    flexDirection: "row",
    marginBottom: 20,
    justifyContent: "space-between",
  },
  button: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  signupButton: {
    marginTop: 20,
  },
  signupText: {
    fontSize: 16,
    color: "#FFFFFF",
  },
});
