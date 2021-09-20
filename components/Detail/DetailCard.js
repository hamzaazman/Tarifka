import React from "react";
import { View, Text, Image, StyleSheet, Button, Linking } from "react-native";

export default function DetailCard({ detail }) {
  return (
    <View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: detail.strMealThumb }} />
      </View>
      <View style={styles.bodyTitle}>
        <Text style={styles.meal}> {detail.strMeal} </Text>
        <Text style={styles.area}> {detail.strArea} </Text>
        <View />
        <Text style={styles.instructions}> {detail.strInstructions} </Text>
        <Button style={styles.button} title="Open on Youtube" onPress={()=> Linking.openURL(detail.strYoutube)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {},

  image: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
  bodyTitle: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  meal: {
    fontSize: 22,
    color: "#a52b2a",
    fontWeight: "bold",
    paddingBottom: 5,
  },
  area: {
    borderBottomWidth: 1,
    borderColor: "#e6e6e7",
    paddingBottom: 5,
    fontSize: 18,
    color: "#a52b2a",
    fontWeight: "bold",
  },
  instructions: {
    paddingTop: 10,
    paddingBottom:10,
    fontSize: 16,
  },
  button:{
    color:'#a52b2a'
  }
});
