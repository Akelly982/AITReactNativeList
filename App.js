import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState,useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';



catagories = [
  { label: 'Food', value: "food"},
  { label: 'Coffee', value: 'coffee'},
  { label: 'Transport', value: 'transport'},
  { label: 'Entertainment', value: 'entertainment'},
  { label: 'Groceries', value: 'groceries'},
  { label: 'Rent', value: 'rent'},
  { label: 'RobotWars', value: 'robotWars'},
]



export default function App() {
  return (
    <View style={styles.margin}>
      <View style={styles.container}>
        <Text>Money Tracker</Text>
        <View>
          <TextInput />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  margin:{
    marginVertical: 20,
    marginHorizontal: 20,
    backgroundColor: "red",
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
    backgroundColor: "blue",
    
  },
});
