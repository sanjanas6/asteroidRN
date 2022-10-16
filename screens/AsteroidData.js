import { View, Text } from 'react-native'
import React from 'react'

const AsteroidData = ({route}) => {
  const data = route.params.state;
  return (
    <View>
      <Text>Id: {data.id}</Text>
      <Text>Name: {data.name}</Text>
      <Text>Designation: {data.designation}</Text>
      <Text>Magnitude: {data.absolute_magnitude_h}</Text>
      <Text>Estimated Diameter(Feet): {data.estimated_diameter.feet.estimated_diameter_min}</Text>
      <Text>Orbit Id: {data.orbital_data.orbit_id}</Text>
    </View>
  )
}

export default AsteroidData;