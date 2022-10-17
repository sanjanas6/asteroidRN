import { Component} from "react";
import React from 'react';
import { StyleSheet, Text, View } from "react-native";

type prop = {
     route : any
}
class AsteroidData extends Component<prop>{
     constructor(props: any){
          super(props);
     }
     render(){
          return(
               <View style={style.container}>
                    <Text style={style.Input}>ID :{this.props.route.params.details.id}</Text>
                    <Text style={style.Input}>Name:{this.props.route.params.details.name}</Text>
                    <Text style={style.Input}>Designation :{this.props.route.params.details.designation}</Text>
                    <Text style={style.Input}>Absolute magnitude h :{this.props.route.params.details.absolute_magnitude_h}</Text>
                    <Text style={style.Input}>
        Estimated Diameter(Feet):
        {this.props.route.params.details.estimated_diameter_min}
      </Text>
               <Text style={style.Input}>Orbit Id: {this.props.route.params.details.orbital_data.orbit_id}</Text>
               </View>
          )
     }
}
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
