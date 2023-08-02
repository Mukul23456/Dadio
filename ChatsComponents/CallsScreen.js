import { StyleSheet, Text, View,ScrollView,Pressable,Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const CallsScreen = () => {
  return (
    <ScrollView>
      <Pressable>
        <View style={styles.chatContainer}>
          <View style={styles.userInfoContainer}>
            <Image
              source={require("../assets/favicon.png")}
              style={styles.userImage}
              alt="user"
            />
            <View style={styles.userInfo}>
              <Text style={styles.userName}>Mukul Tyagi</Text>
              <Feather name="phone-incoming" size={15} color="red" />
            </View>
          </View>
          <View>
            <Text style={styles.timeText}><Ionicons name="md-call" size={24} color="gray" /></Text>
          </View>
        </View>
      </Pressable>
    </ScrollView>
  )
}

export default CallsScreen

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