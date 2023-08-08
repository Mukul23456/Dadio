import { StyleSheet, Text, View, Pressable,Alert } from "react-native";
import React from "react";
import { FontAwesome, FontAwesome5, EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
  const handleSocialMediaLogin = async (action,email) => {
    const apiURL = `https://www.dadio.in/apps/serverapi/server/socialmedia-login.php?api_key=HASH490J669`;
    
    // Determine the social media platform based on the action parameter
    const platform = action === 'facebook' ? 'Facebook' : 'Google';
    
    try {
      // Make the API request
      const response = await fetch(apiURL, {
        method: "POST",
        body: JSON.stringify({
          name: platform,
          email: email, 
          action: action,
        }),
      });

      const data = await response.json();
      console.log(data);

      // Handle the response based on the res_status
      if (data.res_status === "success") {
        // Successful login
        navigation.navigate("Main"); // Replace "Main" with your desired destination
      } else {
        // Handle other cases, e.g., invalid action, error, etc.
        Alert.alert("An error occurred. Please try again later.");
      }
    } catch (error) {
      console.log(error);
      Alert.alert("An error occurred. Please try again later.");
    }
  };


  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Dadio</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          style={[
            styles.button,
            {
              backgroundColor: "rgb(56, 189, 255)",
              borderColor: "rgb(56, 189, 255)",
            },
          ]}
          android_ripple={{ color: "lightgray" }}
          onPress={() => navigation.navigate("UserLogin")}
        >
          <FontAwesome name="user" size={24} color="white" />
          <Text style={styles.buttonText}>User Login</Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            { backgroundColor: "red", borderColor: "red" },
          ]}
          android_ripple={{ color: "lightgray" }}
          onPress={() => handleSocialMediaLogin("google", encodeURIComponent("kalabccba@gmail.com"))}

        >
          <FontAwesome5 name="google" size={24} color="white" />
          <Text style={styles.buttonText}>Login With Google</Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            {
              backgroundColor: "rgb(46, 60, 129)",
              borderColor: "rgb(46, 60, 129)",
            },
          ]}
          android_ripple={{ color: "lightgray" }}
          onPress={() => handleSocialMediaLogin("facebook","kalabccba@gmail.com")}
        >
          <EvilIcons name="sc-facebook" size={28} color="white" />
          <Text style={styles.buttonText}>Login With Facebook</Text>
        </Pressable>
        <Text style={styles.agreement}>
          Register or Login means you agree with the following
        </Text>
        <Pressable>
          <Text style={[styles.agreement, { color: "blue" }]}>
            Terms and Conditions
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
  },
  buttonContainer: {
    marginTop: 25,
    alignItems: "center",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 300, // You can adjust this width as needed
    borderWidth: 1,
    borderRadius: 50,
    marginBottom: 20,
  },
  buttonText: {
    marginLeft: 10,
    color: "white",
    fontSize: 16,
    fontWeight: "800",
  },
  agreement: {
    marginTop: 5,
    fontSize: 12,
  },
});
