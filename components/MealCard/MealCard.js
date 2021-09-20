import React from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";

export default function MealCard({ meals, onSelect }) {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.cardContainer}>
        <Image style={styles.image} source={{ uri: meals.strMealThumb }} />

        <Text style={styles.title}>{meals.strMeal}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  cardContainer: {
    paddingHorizontal: 5,
    marginHorizontal: 5,
    marginVertical: 5,
    flexDirection: "column",
    flex: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 16 / 9,
    resizeMode: "cover",
    borderRadius: 15,
  },
  bodyImage: {},

  title: {
    width: "100%",
    backgroundColor: "#00000099",
    color: "#fff",
    position: "absolute",
    right: 5,
    bottom: 0,
    padding: 5,
    fontWeight: "bold",
    fontSize: 22,
    fontWeight: "bold",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
});
