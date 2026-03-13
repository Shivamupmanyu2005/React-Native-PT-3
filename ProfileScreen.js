import React from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import TabBar from "./TabBar";

export default function ProfileScreen({ navigation, loggedInUser, notes, setLoggedInUser }) {
  const userNotes = notes.filter(function (item) {
    return item.userEmail === loggedInUser.email;
  });

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.card}>
          <Image
            source={{
              uri: "https://placehold.co/240x240/F4C95D/2D2A26.png?text=Me",
            }}
            style={styles.avatar}
          />
          <Text style={styles.name}>{loggedInUser.name}</Text>
          <Text style={styles.meta}>{loggedInUser.email}</Text>

          <View style={styles.statsRow}>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>{userNotes.length}</Text>
              <Text style={styles.statLabel}>Notes</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>Active</Text>
              <Text style={styles.statLabel}>Status</Text>
            </View>
          </View>

          <Pressable style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutText}>Logout</Text>
          </Pressable>
        </View>
      </ScrollView>

      <TabBar navigation={navigation} activeTab="Profile" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f6f1e8",
  },
  content: {
    padding: 18,
    paddingBottom: 120,
  },
  card: {
    backgroundColor: "#fffaf3",
    borderRadius: 24,
    padding: 24,
    alignItems: "center",
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 16,
    backgroundColor: "#f4c95d",
  },
  name: {
    fontSize: 24,
    fontWeight: "800",
    color: "#1a1a1a",
  },
  meta: {
    color: "#6b675f",
    marginTop: 6,
    marginBottom: 18,
  },
  statsRow: {
    flexDirection: "row",
    gap: 12,
    width: "100%",
  },
  statCard: {
    flex: 1,
    backgroundColor: "#efe5d0",
    borderRadius: 18,
    paddingVertical: 18,
    alignItems: "center",
  },
  statNumber: {
    fontSize: 22,
    fontWeight: "800",
    color: "#1f3b2f",
  },
  statLabel: {
    marginTop: 4,
    color: "#6b675f",
  },
  logoutButton: {
    width: "100%",
    marginTop: 18,
    backgroundColor: "#d96c3d",
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: "center",
  },
  logoutText: {
    color: "#fff",
    fontWeight: "700",
  },
});
