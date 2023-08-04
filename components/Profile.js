import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
  Modal,
  Button,
  ScrollView,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Profile = () => {
  //Help modal
  const [modalvisible, setModalvisible] = useState(false);
  const navigation = useNavigation();

  //toggle help modal when press back button
  const handleToggle = () => {
    setModalvisible(!modalvisible);
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setModalvisible(false);
    });

    // Clean up the subscription when the component is unmounted
    return unsubscribe;
  }, [navigation]);

  //Handle profile toogle
  const [isExpanded, setIsExpanded] = useState(false);
  const handleProfileToggle = () => {
    setIsExpanded((prev) => !prev);
  };


  //Handle points and gift shop toogle
  const [isPointsExpanded, setIsPointsExpanded] = useState(false);
  const handlePointsToggle = () => {
    setIsPointsExpanded((prev) => !prev);
  };


  //Handle Search user toogle
  const [isSearchUserExpanded, setIsSearchUserExpanded] = useState(false);
  const handleSearchUserToggle = () => {
    setIsSearchUserExpanded((prev) => !prev);
  };


  //Handle Privacy and security
  const [isPrivacySecurityExpanded, setIsPrivacySecurityExpanded] = useState(false);
    const handlePrivacySecurityToggle = () => {
    setIsPrivacySecurityExpanded((prev) => !prev);
  };

  return (
    <ScrollView>
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
            <FontAwesome name="user" size={26} color="gray" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Isha</Text>
            <Text>dadiodating3@gmail.com</Text>
          </View>
        </View>


        <TouchableOpacity
          style={styles.profileRow}
          onPress={handleProfileToggle}
        >
          <View style={styles.iconContainer}>
            <FontAwesome5 name="user-friends" size={19} color="gray" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>My Profile</Text>
          </View>
        </TouchableOpacity>

        {isExpanded && (
          <View style={styles.expandedOptions}>
            <TouchableOpacity style={styles.optionRow}>
              <Feather name="info" size={20} color="lightgray" />
              <Text style={styles.optionText}>About Me</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionRow} onPress={()=>navigation.navigate('BasicInfo')}>
              <Entypo name="info-with-circle" size={20} color="lightgray" />
              <Text style={styles.optionText}>Basic Info</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionRow}>
              <FontAwesome5 name="share" size={20} color="lightgray" />
              <Text style={styles.optionText}>Refer and Earn</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionRow}>
              <Ionicons name="mic-circle" size={20} color="lightgray" />
              <Text style={styles.optionText}>Record Your Voice</Text>
            </TouchableOpacity>
          </View>
        )}

        <TouchableOpacity
          style={styles.profileRow}
          onPress={handleSearchUserToggle}
        >
          <View style={styles.iconContainer}>
            <FontAwesome name="search" size={24} color="gray" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Search User</Text>
          </View>
        </TouchableOpacity>

        {isSearchUserExpanded && (
          <View style={styles.expandedOptions}>
            <TouchableOpacity style={styles.optionRow}>
              <Ionicons name="people" size={24} color="lightgray" />
              <Text style={styles.optionText}>My Search Preference</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionRow}>
              <FontAwesome5 name="search" size={24} color="lightgray" />
              <Text style={styles.optionText}>Search Users</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionRow}>
              <MaterialCommunityIcons
                name="heart-plus-outline"
                size={24}
                color="lightgray"
              />
              <Text style={styles.optionText}>Online Users</Text>
            </TouchableOpacity>
          </View>
        )}

        <TouchableOpacity
          style={styles.profileRow}
          onPress={handlePointsToggle}
        >
          <View style={styles.iconContainer}>
            <FontAwesome5 name="gem" size={20} color="blue" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Points and Gift Shop</Text>
          </View>
        </TouchableOpacity>

        {isPointsExpanded && (
          <View style={styles.expandedOptions}>
            <TouchableOpacity style={styles.optionRow}>
              <FontAwesome5 name="gem" size={20} color="lightgray" />
              <Text style={styles.optionText}>Buy Points</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionRow}>
              <MaterialCommunityIcons
                name="diamond"
                size={24}
                color="lightgray"
              />
              <Text style={styles.optionText}>My points & Records</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionRow}>
              <Ionicons
                name="chatbubble-ellipses-outline"
                size={24}
                color="lightgray"
              />
              <Text style={styles.optionText}>Buy Chat</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionRow}>
              <MaterialCommunityIcons
                name="chat-plus-outline"
                size={24}
                color="lightgray"
              />
              <Text style={styles.optionText}>My chat Subscription</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionRow} onPress={()=>navigation.navigate('MyGift')}>
              <MaterialCommunityIcons
                name="gift-outline"
                size={24}
                color="lightgray"
              />
              <Text style={styles.optionText}>My Gifts</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionRow} onPress={()=>navigation.navigate('GiftShop')}>
              <MaterialCommunityIcons name="gift" size={24} color="lightgray" />
              <Text style={styles.optionText}>Gift Shop</Text>
            </TouchableOpacity>
          </View>
        )}

        <TouchableOpacity
          style={styles.profileRow}
          onPress={handlePrivacySecurityToggle}
        >
          <View style={styles.iconContainer}>
            <MaterialIcons name="security" size={24} color="gray" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Privacy and Security</Text>
          </View>
        </TouchableOpacity>

        {isPrivacySecurityExpanded && (
          <View style={styles.expandedOptions}>
            <TouchableOpacity style={styles.optionRow}>
              <MaterialIcons name="privacy-tip" size={24} color="lightgray" />
              <Text style={styles.optionText}>Privacy Controls</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionRow}>
              <Foundation name="key" size={24} color="lightgray" />
              <Text style={styles.optionText}>Update Passwords</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionRow}>
              <AntDesign name="delete" size={24} color="lightgray" />
              <Text style={styles.optionText}>Delete Account</Text>
            </TouchableOpacity>
          </View>
        )}

        <TouchableOpacity
          style={styles.profileRow}
          onPress={() => navigation.navigate("Chats")}
        >
          <View style={styles.iconContainer}>
            <Ionicons name="md-call" size={24} color="gray" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Call and Chat Logs</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.profileRow} onPress={handleToggle}>
          <View style={styles.iconContainer}>
            <Ionicons name="help-circle" size={24} color="gray" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Need Help</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.profileRow}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons name="logout" size={24} color="red" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Logout</Text>
          </View>
        </View>

        <Modal transparent={true} visible={modalvisible}>
          <View style={styles.modal}>
            <View style={styles.modalContent}>
              <View style={styles.modalHeading}>
                <Text style={styles.headText}>Need Help?</Text>
                <TouchableOpacity onPress={handleToggle}>
                  <Text style={styles.closeText}>
                    <MaterialIcons name="cancel" size={24} color="white" />
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.modalBody}>
                <TouchableOpacity
                  style={styles.bodyContent}
                  onPress={() => navigation.navigate("QuickGuide")}
                >
                  <Text style={styles.bodyText}>Quick Start Guide</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.bodyContent}
                  onPress={() => navigation.navigate("FAQ")}
                >
                  <Text style={styles.bodyText}>FAQ</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.bodyContent}
                  onPress={() => navigation.navigate("PrivacyPolicy")}
                >
                  <Text style={styles.bodyText}>Privacy Policy</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.bodyContent}
                  onPress={() => navigation.navigate("Contact")}
                >
                  <Text style={styles.bodyText}>Contact Us</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
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
    borderBottomColor: "lightgray",
    alignItems: "center",
  },
  iconContainer: {
    margin: 13,
  },
  textContainer: {
    marginLeft: 20,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
  modal: {
    flex: 1,
    justifyContent: "center", // To center the modal vertically
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background color
  },
  modalContent: {
    backgroundColor: "white",
    padding: 0,
    borderRadius: 8,
  },
  modalHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "black",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  closeText: {
    color: "white",
    padding: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  headText: {
    color: "white",
    padding: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  modalBody: {
    marginTop: 15,
  },
  bodyContent: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
  },
  bodyText: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 8,
  },
  expandedOptions: {
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    marginBottom: 10,
  },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
  optionText: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 19,
  },
});

export default Profile;
