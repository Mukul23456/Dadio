import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import ChatMessages from "../components/ChatMessages";

const ChatScreen = () => {
  const navigation = useNavigation();
  const currentTimestamp = Date.now(); // Get the current timestamp in milliseconds
  const dateObject = new Date(currentTimestamp); // Create a Date object from the timestamp

  const timeOptions = { hour: "numeric", hour12: true };
  const formattedTime = dateObject.toLocaleTimeString(undefined, timeOptions);

  return (
    <ScrollView>
      <Pressable onPress={() => navigation.navigate("ChatMessages")}>
        <View style={styles.chatContainer}>
          <View style={styles.userInfoContainer}>
            <Image
              source={require("../assets/favicon.png")}
              style={styles.userImage}
              alt="user"
            />
            <View style={styles.userInfo}>
              <Text style={styles.userName}>Mukul Tyagi</Text>
              <Text>Hi</Text>
            </View>
          </View>
          <View>
            <Text style={styles.timeText}>{formattedTime}</Text>
          </View>
        </View>
      </Pressable>
    </ScrollView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  chatContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    borderBottomWidth: 1,
    padding: 15,
    borderBottomColor: "rgb(255, 129, 178)",
  },
  userInfoContainer: {
    flex: 1,
    flexDirection: "row",
  },
  userImage: {
    backgroundColor: "red",
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  userInfo: {
    margin: 5,
    marginLeft: 15,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  timeText: {
    marginTop: 10,
  },
});

