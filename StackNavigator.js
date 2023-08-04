import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Screens/Login";
import UserLogin from "./Screens/UserLogin";
import Main from "./Screens/Main";
import ChatMessages from "./components/ChatMessages";
import QuickGuide from "./HelpComponents/QuickGuide";
import FaQ from "./HelpComponents/FaQ";
import PrivacyPolicy from "./HelpComponents/PrivacyPolicy";
import Contact from "./HelpComponents/Contact";
import Chats from "./components/Chats";
import Personprofile from "./components/Personprofile";
import MyGift from "./components/MyGift";
import BasicInfo from "./components/BasicInfo";
import GiftShop from "./components/GiftShop";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UserLogin"
          component={UserLogin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Personprofile"
          component={Personprofile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChatMessages"
          component={ChatMessages}
        />
        <Stack.Screen
          name="Chats"
          component={Chats}
        />
        <Stack.Screen
          name="QuickGuide"
          component={QuickGuide}
        />
        <Stack.Screen
          name="FAQ"
          component={FaQ}
        />
        <Stack.Screen
          name="PrivacyPolicy"
          component={PrivacyPolicy}
        />
        <Stack.Screen
          name="Contact"
          component={Contact}
        />
        <Stack.Screen
          name="MyGift"
          component={MyGift}
        />
        <Stack.Screen
          name="BasicInfo"
          component={BasicInfo}
        />
        <Stack.Screen
          name="GiftShop"
          component={GiftShop}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
