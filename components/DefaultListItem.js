import * as React from 'react'
import {View, Text, StyleSheet} from 'react-native'


export const ListItem = ({item}) => (
  <View style={styles.listItem}>
    <Text style={styles.listItemName}>{item.name}</Text>
    <Text style={styles.listItemName}>{item.quantity}</Text>
  </View>
)

const styles = StyleSheet.create({
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "space-between",
    paddingVertical: 10,
    backgroundColor: '#e8e8e8',
    marginVertical: 10,
  },
  listItemName:{
    color: "#3b3b3b",
  }
})