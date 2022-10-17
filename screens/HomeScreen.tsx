import {Button, StyleSheet,  TextInput, View, Alert} from 'react-native';
import React from 'react';
import { Component } from 'react';
import axios from 'axios';
import { NavigationProp } from '@react-navigation/native';

type prop= {
  navigation: NavigationProp<any,any>
}
type state= {
  id: string, load: boolean
}
export default class InputForm extends Component< prop, state>{
     constructor(props : prop){
          super(props);
          this.state={
               id: '',
               load: false
          }
     }
     async getData(id: string){
        
      this.setState({load: true})
      try{    
      const {data} = await axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${this.state.id}?api_key=L6AW6ZMaTbURc0Kjh0eEPcbJDQmaqlWDjqVSAiHW`);
      this.props.navigation.navigate('Detail',{details:data})
      console.log(data);
    }
    catch(error){
      Alert.alert(
        "Invalid Data",
        "Entered Id do not Match. Please Re-enter correct id!"
      );
      this.setState({load: false})
      this.setState({id: ''})
      return;
    }
    this.setState({load: false})  
    this.setState({id: ''})

 }

    handleSearch() {
      this.setState({load: true})

      if (this.state.id.length == 0) {
        Alert.alert(
          'Please Enter Asteroid Id',
          'Asteroid id length should be number type',
        );
        return null;
      }
      this.getData(this.state.id);
    }
     async randomId() {
      const random = Math.floor(Math.random() * 10);
      this.setState({load: true})    
      const response= await axios.get(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=L6AW6ZMaTbURc0Kjh0eEPcbJDQmaqlWDjqVSAiHW`);
      let id = response.data.near_earth_objects[random].id;
      // console.log(id);
      this.setState({id:id});
      this.getData(id);
    }
    
render(){
  return (
    <>
     <View style={style.container}>
      <TextInput
        placeholder='Asteroid Id'
        value={this.state.id}
        onChangeText={(text) => this.setState({id : text})}
        keyboardType='numeric'
        style={style.InputContainer}
      />
      <View style={style.buttonContainer}>
        <Button title='getData' color='#213A5C' onPress={this.handleSearch.bind(this)} />
        {/* <Button title="RandomID" color="black" onPress={randomID} /> */}
      </View>
      <View style={style.buttonContainer}>
        {/* <Button title="getData" color="grey" onPress={getData} /> */}
        <Button title='Random' color='#213A5C' onPress={this.randomId.bind(this)} />
      </View>
      </View>
    </>
  );
}
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  InputContainer: {
    borderWidth: 2,
    borderColor: "white",
    width: "80%",
    textAlign: "center",
    marginBottom: 20,
    borderRadius: 10,
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "white",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
  loading: {
    padding: 18,
    margin: 10,
    alignItems: "center",
    borderRadius: 8,
  },
  loadingText: {
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