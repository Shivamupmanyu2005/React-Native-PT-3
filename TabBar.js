import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const TABS = ["Home", "Notes", "Profile"];

export default function TabBar({ navigation, activeTab }) {
  return (
    <View style={styles.tabBar}>
      {TABS.map((tab) => {
        const isActive = activeTab === tab;

        return (
          <Pressable
            key={tab}
            onPress={() => navigation.navigate(tab)}
            style={[styles.tabButton, isActive && styles.tabButtonActive]}
          >
            <Text style={[styles.tabLabel, isActive && styles.tabLabelActive]}>{tab}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    left: 16,
    right: 16,
    bottom: 16,
    backgroundColor: "#1f3b2f",
    borderRadius: 24,
    padding: 10,
    flexDirection: "row",
    gap: 8,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 18,
    alignItems: "center",
  },
  tabButtonActive: {
    backgroundColor: "#f4c95d",
  },
  tabLabel: {
    color: "#d5dfd7",
    fontSize: 12,
    fontWeight: "700",
  },
  tabLabelActive: {
    color: "#2d2a26",
  },
});
