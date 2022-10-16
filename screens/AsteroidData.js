import { View, Text, StyleSheet } from "react-native";
import React from "react";

const AsteroidData = ({ route }) => {
  const data = route.params.state;
  return (
    <View style={style.container}>
      <Text style={style.Input}>Id: {data.id}</Text>
      <Text style={style.Input}>Name: {data.name}</Text>
      <Text style={style.Input}>Designation: {data.designation}</Text>
      <Text style={style.Input}>Magnitude: {data.absolute_magnitude_h}</Text>
      <Text style={style.Input}>
        Estimated Diameter(Feet):{" "}
        {data.estimated_diameter.feet.estimated_diameter_min}
      </Text>
      <Text style={style.Input}>Orbit Id: {data.orbital_data.orbit_id}</Text>
    </View>
  );
};

export default AsteroidData;

const style = StyleSheet.create({
  container: {
    padding: 18,
    margin: 10,
    alignItems: "center",
    borderRadius: 8,
  },
  Input: {
    color: "white",
    fontSize: 22,
    marginVertical: 4,
    borderWidth: 1,
    backgroundColor: "#152238",
    paddingHorizontal: 10,
    paddingVertical: 24,
    width: 350,
    borderRadius: 10,
    textAlign: "center",
  },
});
