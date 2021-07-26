import React from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";

export default ({navigation}) => (
  <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
    <Text>Welcome!</Text>
    <Button onPress={() => navigation.navigate("Sign Up")} title={"Sign Up"}/>
    <Button onPress={() => navigation.navigate("Sign In")} title={"Sign In"}/>
  </View>
);
