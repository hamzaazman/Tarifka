import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { CATEGORIE_URL } from "@env";
import useFetchData from "../../hooks/useFetchData";
import CategorieCard from "../../components/Categories/CategorieCard";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

export default function Categories({ navigation }) {
  const { data, loading, error } = useFetchData(CATEGORIE_URL);

  const handlerCategories = (strCategory) => {
    navigation.navigate("Meals", { strCategory });
  };

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const renderCategories = ({ item }) => (
    <CategorieCard
      categorie={item}
      onSelect={() => handlerCategories(item.strCategory)}
    />
  );
  return (
    <FlatList
      style={styles.container}
      data={data.categories}
      renderItem={renderCategories}
      keyExtractor={(item) => item.idCategory}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fea500",
    flex: 1,
  },
});
