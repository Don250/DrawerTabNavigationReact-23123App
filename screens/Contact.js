import { View, Text,StyleSheet } from "react-native";

import React from "react";
const Contact=()=>{
    return(
        <View style = {styles.container}>
            <Text>Contact Screen</Text>
        </View>
    )
}
export  default Contact
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });