import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import NotesScreen from "./NotesScreen";
import ProfileScreen from "./ProfileScreen";
import SignupScreen from "./SignupScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Demo User",
      email: "demo@gmail.com",
      password: "123456",
    },
  ]);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [notes, setNotes] = useState([
    {
      id: 1,
      userEmail: "demo@gmail.com",
      title: "Welcome Note",
      content: "This is your first note.",
    },
  ]);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShadowVisible: false }}>
        {loggedInUser ? (
          <>
            <Stack.Screen name="Home">
              {(props) => (
                <HomeScreen
                  {...props}
                  loggedInUser={loggedInUser}
                  notes={notes}
                />
              )}
            </Stack.Screen>
            <Stack.Screen name="Notes">
              {(props) => (
                <NotesScreen
                  {...props}
                  loggedInUser={loggedInUser}
                  notes={notes}
                  setNotes={setNotes}
                />
              )}
            </Stack.Screen>
            <Stack.Screen name="Profile">
              {(props) => (
                <ProfileScreen
                  {...props}
                  loggedInUser={loggedInUser}
                  notes={notes}
                  setLoggedInUser={setLoggedInUser}
                />
              )}
            </Stack.Screen>
          </>
        ) : (
          <>
            <Stack.Screen
              name="Login"
              options={{
                headerShown: false,
              }}
            >
              {(props) => (
                <LoginScreen
                  {...props}
                  users={users}
                  setLoggedInUser={setLoggedInUser}
                />
              )}
            </Stack.Screen>
            <Stack.Screen name="Signup" options={{ title: "Create Account" }}>
              {(props) => (
                <SignupScreen
                  {...props}
                  users={users}
                  setUsers={setUsers}
                />
              )}
            </Stack.Screen>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
