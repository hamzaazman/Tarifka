import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import DetailCard from "../../components/Detail/DetailCard";
import Error from "../../components/Error/Error";
import Loading from "../../components/Loading/Loading";
import useFetchData from "../../hooks/useFetchData";
import { DETAILS_URL } from "@env";

export default function Details({ route }) {
  const { idMeal } = route.params;
  const { data, loading, error } = useFetchData(`${DETAILS_URL}${idMeal}`);

  const renderDetail = ({ item }) => <DetailCard detail={item} />;

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <FlatList
      style={styles.container}
      data={data.meals}
      renderItem={renderDetail}
      keyExtractor={(item) => item.idMeal}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
});
