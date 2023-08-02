import React from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";

const Notifications = () => {
  const currentTimestamp = Date.now(); // Get the current timestamp in milliseconds
  const dateObject = new Date(currentTimestamp); // Create a Date object from the timestamp

  const timeOptions = { hour: "numeric", hour12: true };
  const formattedTime = dateObject.toLocaleTimeString(undefined, timeOptions);

  return (
    <ScrollView>
      <View style={styles.notificationContainer}>
        <Image
          source={require("../assets/favicon.png")}
          style={styles.userImage}
          alt="user"
        />
        <Text style={styles.notificationText}>User Liked Your Profile.</Text>
        <Text style={styles.timeText}>{formattedTime}</Text>
      </View>
    </ScrollView>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  notificationContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  userImage: {
    backgroundColor: "red",
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  notificationText: {
    marginTop: 10,
  },
  timeText: {
    marginTop: 10,
  },
});

