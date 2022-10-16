import { View, Text, TextInput, Button, StyleSheet, ImageBackground, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader';
const HomeScreen = ({navigation}) => {

    const [id , setId] = useState("");
    const [data , setData] = useState("");
    const [loading , setLoading] = useState("false")
    const Reset = () =>{
        setId("");
    }
    useEffect(() => {
        // setLoading(true)
        const fetchData = async () =>{
          const res = await fetch(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=L6AW6ZMaTbURc0Kjh0eEPcbJDQmaqlWDjqVSAiHW`)
          const data = await res.json();
          console.log(data);
          setData([data]);
        // setLoading(false);
        };
        fetchData();
      }, []);
    
    const getData = async (id) =>{
       try{
        setLoading(true)
       const res = await fetch(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=L6AW6ZMaTbURc0Kjh0eEPcbJDQmaqlWDjqVSAiHW`)
       if(!res.ok){
        throw new Error("Invalid");
        // Alert.alert("Invalid Data", "Entered Id do not Match. Please Re-enter correct id!")
       }
       const data = await res.json();
       navigation.navigate("Detail" , {state:data})
       setLoading(false)
    }catch(e){
        Alert.alert("Invalid Data", "Entered Id do not Match. Please Re-enter correct id!")
        setLoading(false)
    }
    };

    const Submit = () =>{
        getData(id);
        Reset();
    }
    const randomID = () => {
        const random = Math.floor(Math.random() * 10);
        const id = data[0].near_earth_objects[random].id;
        // console.log(data);
        getData(id);
        Reset();
      };

    if(loading){
       return (
        <View style={style.loading}>
       <Text style={style.loadingText}>Loading...</Text>
       </View>
       )
    }
  return (
    <View style={style.container}>
      <TextInput 
      placeholder='Asteroid Id'
      value= {id}
      onChangeText={(num) => setId(num)}
      keyboardType="numeric"
      style={style.InputContainer}
       />
    <View style={style.buttonContainer}>
       <Button title="Submit" color="#213A5C" onPress={Submit} />
       {/* <Button title="RandomID" color="black" onPress={randomID} /> */}
    </View>
    <View style={style.buttonContainer}>
       {/* <Button title="Submit" color="grey" onPress={Submit} /> */}
       <Button title="Random" color="#213A5C" onPress={randomID} />
    </View>
    </View>
  )
}

export default HomeScreen


const style = StyleSheet.create({
    container: {
       flex: 1,
       justifyContent: "center",
       alignItems: "center",
    },
    image: {
        flex: 1,
        justifyContent: "center"
      },
    InputContainer:{
        borderWidth: 2,
        borderColor: 'white',
        width: '80%',
        textAlign: 'center',
        marginBottom: 20,
        borderRadius: 10,
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: 'white'
    },
    buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    },
    loading: {
    padding: 18,
    margin: 10,
    alignItems: 'center',
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
    textAlign: 'center',
    }
})