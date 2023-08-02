import React from "react";
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useNavigation } from "@react-navigation/native";
import ChatScreen from "../ChatsComponents/ChatScreen";
import CallsScreen from "../ChatsComponents/CallsScreen";
import { Ionicons } from "@expo/vector-icons";
const Tab = createMaterialTopTabNavigator();

const Chats = () => {
  const navigation = useNavigation();
  StatusBar.setBackgroundColor("rgb(164, 172, 129)");
  return (
    <SafeAreaView
      style={[styles.container, { marginTop: StatusBar.currentHeight }]}
    >
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: styles.tabLabel,
          indicatorStyle: styles.tabIndicator,
          style: styles.tabBar,
          pressColor: "black",
          pressOpacity: 0.8,
        }}
      >
        <Tab.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{ title: "Chat" }}
        />
        <Tab.Screen
          name="CallsScreen"
          component={CallsScreen}
          options={{ title: "Calls" }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  tabText: {
    fontSize: 20,
    color: "black",
  },
  tabBar: {
    backgroundColor: "white",
  },
  tabLabel: {
    fontWeight: "bold",
    fontSize: 16,
  },
  tabIndicator: {
    backgroundColor: "black",
  },
});

export default Chats;
