import StackNavigator from "./StackNavigator";
import React from "react";
import { UserProvider } from "./UserContext";

export default function App() {
  return (
    <>
        <UserProvider>
          <StackNavigator />
        </UserProvider>
    </>
  );
}
