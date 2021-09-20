import React from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Image,
} from "react-native";

export default function CategorieCard({ categorie, onSelect }) {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.cardContainer}>
        <Image
          style={styles.image}
          source={{ uri: categorie.strCategoryThumb }}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            alignSelf: "center",
            paddingHorizontal: 10,
          }}
        >
          {categorie.strCategory}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    paddingHorizontal: 10,
    marginHorizontal: 8,
    marginVertical: 5,
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "gray",
    borderBottomLeftRadius: 50,
    borderTopStartRadius: 50,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
  },
  image: {
    width: 100,
    minHeight: 100,
    resizeMode: "contain",
  },
});
