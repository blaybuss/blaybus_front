import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import Logo from "../assets/images/LOGO.svg";

export default function LoginPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>로그인</Text>
      <Logo width={50} height={100}/>

      <Text>아이디</Text>
      <TextInput/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
});

