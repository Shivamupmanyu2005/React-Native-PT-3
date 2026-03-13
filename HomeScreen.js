import React from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import TabBar from "./TabBar";

export default function HomeScreen({ navigation, loggedInUser, notes }) {
  const userNotes = notes.filter(function (item) {
    return item.userEmail === loggedInUser.email;
  });

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.heroCard}>
          <Text style={styles.title}>Simple Notes</Text>
          <Text style={styles.subtitle}>Write small notes and keep them in one place</Text>
          <Image
            source={{
              uri: "https://placehold.co/600x320/F4C95D/2D2A26.png?text=Notes+Dashboard",
            }}
            style={styles.heroImage}
          />
        </View>

        <View style={styles.summaryRow}>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryLabel}>Your Notes</Text>
            <Text style={styles.summaryValue}>{userNotes.length}</Text>
          </View>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryLabel}>Account</Text>
            <Text style={styles.summaryValue}>{loggedInUser.name}</Text>
          </View>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Quick Access</Text>
          <Pressable style={styles.linkButton} onPress={() => navigation.navigate("Notes")}>
            <Text style={styles.linkButtonText}>Open Notes</Text>
          </Pressable>
          <Pressable style={styles.linkButton} onPress={() => navigation.navigate("Profile")}>
            <Text style={styles.linkButtonText}>Open Profile</Text>
          </Pressable>
        </View>
      </ScrollView>

      <TabBar navigation={navigation} activeTab="Home" />
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
  heroCard: {
    backgroundColor: "#1f3b2f",
    borderRadius: 24,
    padding: 18,
    marginBottom: 18,
  },
  title: {
    color: "#fff7ec",
    fontSize: 28,
    fontWeight: "800",
  },
  subtitle: {
    color: "#c8d5cb",
    marginTop: 6,
    marginBottom: 16,
  },
  heroImage: {
    width: "100%",
    height: 180,
    borderRadius: 18,
    backgroundColor: "#e8d8b6",
  },
  summaryRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 18,
  },
  summaryCard: {
    flex: 1,
    backgroundColor: "#fffaf3",
    borderRadius: 18,
    padding: 16,
  },
  summaryLabel: {
    color: "#6b675f",
    marginBottom: 6,
  },
  summaryValue: {
    fontSize: 20,
    fontWeight: "800",
    color: "#1a1a1a",
  },
  sectionCard: {
    backgroundColor: "#fffaf3",
    borderRadius: 20,
    padding: 18,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 12,
  },
  linkButton: {
    backgroundColor: "#d96c3d",
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: 10,
  },
  linkButtonText: {
    color: "#fff",
    fontWeight: "700",
  },
});
