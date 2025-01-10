import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";

const { width } = Dimensions.get("window");

type Slide = {
  id: string;
  image: any;
  texts?: {
    text: string;
    fontSize: number;
    fontWeight?: string;
  }[];
};

const slides: Slide[] = [
  {
    id: "1",
    image: require("../assets/images/LOGO.svg"),
  },
  {
    id: "2",
    texts: [
      { text: "경험치와 즐거움", fontSize: 28, fontWeight: "bold" },
      { text: "경험치를 얻어 일 속에", fontSize: 20 },
      { text: "즐거움을 얻어보세요!", fontSize: 20 },
    ],
    image: require("../assets/images/landingImport1.svg"),
  },
  {
    id: "3",
    texts: [
      { text: "내 눈으로 직접", fontSize: 28, fontWeight: "bold" },
      { text: "확인하는 내 성과", fontSize: 28, fontWeight: "bold" },
      { text: "한 번의 클릭으로 내 성과를", fontSize: 20 },
      { text: "확인해보세요!", fontSize: 20 },
    ],
    image: require("../assets/images/landingImport2.svg"),
  },
];

export default function LandingPage({ navigation }: { navigation: any }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  const handleButtonPress = () => {
    if (currentIndex === 2) {
      navigation.replace("/login");
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={slides}
        horizontal
        pagingEnabled
        onScroll={handleScroll}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.slide, { width }]}>
            <Image source={item.image} style={styles.image} />
            {item.texts &&
              item.texts.map((textItem, index) => (
                <Text
                  key={index}
                  style={{
                    fontSize: 16,
                    fontWeight: "normal",
                    textAlign: "center",
                    marginBottom: 10,
                  }}
                >
                  {textItem.text}
                </Text>
              ))}
          </View>
        )}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            currentIndex === 0 ? styles.buttonDisabled : styles.buttonEnabled,
          ]}
          onPress={handleButtonPress}
          disabled={currentIndex !== 2}
        >
          <Text style={styles.buttonText}>시작하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
  },
  buttonEnabled: {
    backgroundColor: "#000",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonDisabled: {
    backgroundColor: "#D9D9D9",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 50,
    width: "100%",
    paddingHorizontal: 20,
    alignItems: "center",
  },
});
