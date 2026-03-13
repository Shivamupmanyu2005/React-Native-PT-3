import React, { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function SignupScreen({ navigation, users, setUsers }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    if (name.trim() === "" || email.trim() === "" || password.trim() === "") {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    const alreadyExists = users.find(function (item) {
      return item.email === email;
    });

    if (alreadyExists) {
      Alert.alert("Error", "Email already registered");
      return;
    }

    const newUser = {
      id: Date.now(),
      name: name,
      email: email,
      password: password,
    };

    setUsers([...users, newUser]);
    Alert.alert("Success", "Account created");
    navigation.goBack();
  };

  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>Sign up and start saving notes</Text>

        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
          style={styles.input}
          placeholderTextColor="#867e73"
        />
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          style={styles.input}
          placeholderTextColor="#867e73"
          autoCapitalize="none"
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Create password"
          style={styles.input}
          placeholderTextColor="#867e73"
          secureTextEntry
        />

        <Pressable style={styles.primaryButton} onPress={handleSignup}>
          <Text style={styles.primaryText}>Create Account</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f6f1e8",
    padding: 18,
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#fffaf3",
    borderRadius: 24,
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "800",
    color: "#1f3b2f",
  },
  subtitle: {
    color: "#6b675f",
    marginTop: 6,
    marginBottom: 16,
  },
  input: {
    backgroundColor: "#f6f1e8",
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 14,
    marginBottom: 12,
    fontSize: 15,
    color: "#1a1a1a",
  },
  primaryButton: {
    backgroundColor: "#d96c3d",
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 4,
  },
  primaryText: {
    color: "#fff",
    fontWeight: "700",
  },
});
