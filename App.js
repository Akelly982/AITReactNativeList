import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState,useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';


//import from another file
import {defaultListItem} from "./components/defaultListItem";
import {DropDown} from "./components/DropDown"




// Array
let catagories = [
  { label: 'Food', value: "food"},
  { label: 'Coffee', value: 'coffee'},
  { label: 'Transport', value: 'transport'},
  { label: 'Entertainment', value: 'entertainment'},
  { label: 'Groceries', value: 'groceries'},
  { label: 'Rent', value: 'rent'},
  { label: 'RobotWars', value: 'robotWars'},
]



export default function App() {

  //states
  const [category, setCategory] = useState()
  const [ammout, setAmmount] = useState()


  const dropdownChange = (value) => {
    //console.log(value)
    setCategory(value)
  }
  
  const ammountChange = (value) => {
    console.log(value)
  }

  return (
    <View style={styles.margin}>
      <View style={styles.container}>
        <Text>Money Tracker</Text>
        <View>
          <TextInput style={styles.input} onChangeText={ammountChange} keyboardType={'number-pad'}/>
          <DropDown catagories={catagories} handler={dropdownChange} />
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  margin:{
    marginVertical: 20,
    marginHorizontal: 20,
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
    
  },

  input: {
    backgroundColor: "#cccccc",
    padding: 10,
    fontSize: 20,
  },


});
