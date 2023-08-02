// Profile.js

import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          source={require("../assets/favicon.png")}
          style={styles.avatar}
          alt="user"
        />
        <Pressable style={styles.cameraIcon}>
          <Entypo name="camera" size={30} color="grey" />
        </Pressable>
      </View>

      <View style={styles.profileRow}>
        <View style={styles.iconContainer}>
          <FontAwesome name="user" size={24} color="gray" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Isha</Text>
          <Text>dadiodating3@gmail.com</Text>
        </View>
      </View>

      <View style={styles.profileRow}>
        <View style={styles.iconContainer}>
          <FontAwesome5 name="user-friends" size={24} color="gray" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Friends</Text>
        </View>
      </View>

      <View style={styles.profileRow}>
        <View style={styles.iconContainer}>
          <FontAwesome name="search" size={24} color="gray" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Search User</Text>
        </View>
      </View>

      <View style={styles.profileRow}>
        <View style={styles.iconContainer}>
          <FontAwesome5 name="gem" size={20} color="blue" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Points and Gift Shop</Text>
        </View>
      </View>

      <View style={styles.profileRow}>
        <View style={styles.iconContainer}>
          <MaterialIcons name="security" size={24} color="gray" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Privacy and Security</Text>
        </View>
      </View>

      <View style={styles.profileRow}>
        <View style={styles.iconContainer}>
          <Ionicons name="md-call" size={24} color="gray" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Call and Chat Logs</Text>
        </View>
      </View>

      <View style={styles.profileRow}>
        <View style={styles.iconContainer}>
          <Ionicons name="help-circle" size={24} color="gray" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Need Help</Text>
        </View>
      </View>

      <View style={styles.profileRow}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="logout" size={24} color="red" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Logout</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatarContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: 20,
  },
  avatar: {
    backgroundColor: "red",
    height: 180,
    width: 180,
    borderWidth: 4,
    borderColor: "white",
    borderRadius: 100,
  },
  cameraIcon: {
    position: "absolute",
    top: 120,
    right: 85,
  },
  profileRow: {
    display: "flex",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    alignItems: "center",
  },
  iconContainer: {
    margin: 10,
  },
  textContainer: {
    marginLeft: 20,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default Profile;




