import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TextInput,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons, FontAwesome, Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const ChatMessages = ({ navigation }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    if (message.trim() === "") {
      return;
    }
    setMessages([...messages, { id: messages.length, text: message }]);
    setMessage("");
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View style={styles.headerTitleContainer}>
          <Image
            source={require("../assets/favicon.png")}
            style={styles.profilePhoto}
          />
          <Text style={styles.headerTitle}>Mukul Tyagi</Text>
        </View>
      ),
      headerRight: () => (
        <View style={styles.headerRightContainer}>
          <AntDesign
            name="gift"
            size={28}
            color="red"
            style={styles.headerIcon}
          />
          <Ionicons
            name="call"
            size={24}
            color="lightgreen"
            style={styles.headerIcon}
          />
          <Entypo
            name="dots-three-vertical"
            size={24}
            color="black"
            style={styles.headerIcon}
          />
        </View>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>{/* Header content */}</View>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <View style={styles.messageContainer}>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.messagesContent}
      />
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.giftLeft}>
          <FontAwesome name="gift" size={28} color="red" />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={(text) => setMessage(text)}
          placeholder="Type your message..."
          onSubmitEditing={handleSend}
        />

        <TouchableOpacity style={styles.gift}>
          <Entypo name="attachment" size={24} color="gray" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.gift}>
          <Entypo name="camera" size={24} color="gray" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.gift}>
          <Feather name="mic" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Ionicons name="send" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatMessages;

const styles = StyleSheet.create({
  headerTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profilePhoto: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  headerRightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerIcon: {
    marginLeft: 15,
  },
  container: {
    flex: 1,
  },
  header: {
    // Header styles
  },
  messageContainer: {
    borderWidth:1,
    alignItems:"center",
    maxWidth:100,
    backgroundColor:"lightgreen",
    margin:10,
    borderRadius:10,
    borderColor:"lightgreen",
    padding:10
  },
  messageText: {
    // Message text styles
    // For example: font size, color, etc.
  },
  messagesContent: {
    // Additional styles for the messages container
    // For example: flexGrow, justifyContent, etc.
  },
  giftLeft: {
   marginRight:10,
   backgroundColor:"white",
   borderRadius:50,
   padding:5
  },
  gift: {
    marginRight: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingBottom: 5,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 20,
  },
});

