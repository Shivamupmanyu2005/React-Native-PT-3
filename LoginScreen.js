import React, { useState } from "react";
import { Alert, Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function LoginScreen({ navigation, users, setLoggedInUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const foundUser = users.find(function (item) {
      return item.email === email && item.password === password;
    });

    if (!foundUser) {
      Alert.alert("Error", "Invalid email or password");
      return;
    }

    setLoggedInUser(foundUser);
    setEmail("");
    setPassword("");
  };

  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <Text style={styles.title}>Simple Notes</Text>
        <Text style={styles.subtitle}>Login to create and manage your notes</Text>

        <Image
          source={{
            uri: "https://placehold.co/500x220/E7DCC8/2D2A26.png?text=Login",
          }}
          style={styles.image}
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
          placeholder="Enter your password"
          style={styles.input}
          placeholderTextColor="#867e73"
          secureTextEntry
        />

        <Pressable style={styles.primaryButton} onPress={handleLogin}>
          <Text style={styles.primaryText}>Login</Text>
        </Pressable>
        <Pressable style={styles.secondaryButton} onPress={() => navigation.navigate("Signup")}>
          <Text style={styles.secondaryText}>Go to Signup</Text>
        </Pressable>

        <Text style={styles.smallText}>Demo email: demo@gmail.com</Text>
        <Text style={styles.smallText}>Demo password: 123456</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f6f1e8",
    justifyContent: "center",
    padding: 18,
  },
  card: {
    backgroundColor: "#fffaf3",
    borderRadius: 24,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#1f3b2f",
  },
  subtitle: {
    color: "#6b675f",
    marginTop: 6,
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: 160,
    borderRadius: 18,
    marginBottom: 16,
    backgroundColor: "#efe5d0",
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
  secondaryButton: {
    borderWidth: 1,
    borderColor: "#d1c5ae",
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 10,
  },
  secondaryText: {
    color: "#5b5348",
    fontWeight: "700",
  },
  smallText: {
    marginTop: 10,
    color: "#6b675f",
  },
});
