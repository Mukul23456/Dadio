import React from "react";
import { TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Preference from "../components/Preference";
import Notifications from "../components/Notifications";
import Random from "../components/Random";
import Chats from "../components/Chats";
import Profile from "../components/Profile";
import { AntDesign, Ionicons, FontAwesome, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();
const Main = () => {
  const navigation = useNavigation();
  return (

    
    <Tab.Navigator screenOptions={{ showLabel: false }}>
      <Tab.Screen
        name="Preference"
        component={Preference}
        options={{
          headerShown: false,
          tabBarIcon: () => <AntDesign name="heart" size={35} color="red" />,
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Preference")}
              style={styles.backButton}
            >
              <Ionicons name="arrow-back" size={25} color="black" />
            </TouchableOpacity>
          ),
          tabBarIcon: () => (
            <Ionicons name="notifications" size={35} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Random"
        component={Random}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <FontAwesome name="phone-square" size={35} color="skyblue" />
          ),
        }}
      />
      <Tab.Screen
        name="Chats"
        component={Chats}
        options={{
          headerShown: false,
          tabBarIcon: () => <Entypo name="chat" size={35} color="green" />,
        }}
      />
      <Tab.Screen
        name="My Account"
        component={Profile}
        options={{
          headerLeft: () => (
            <TouchableOpacity style={styles.backButton}>
              <Ionicons name="arrow-back-sharp" size={24} color="black" />
            </TouchableOpacity>
          ),
          tabBarIcon: () => (
            <FontAwesome name="user-circle" size={35} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Main;

const styles = StyleSheet.create({
  backButton: {
    marginLeft: 10,
  },
});
