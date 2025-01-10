import { Slot } from "expo-router";
import { View } from "react-native";
import LandingPage from "./landing";
import LoginPage from "./login";

export default function Layout() {
  return (
    <View style={{ flex : 1}}>
      <LandingPage navigation={undefined}/>
    </View>
  )
}