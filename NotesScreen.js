import React, { useState } from "react";
import { Alert, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import TabBar from "./TabBar";

export default function NotesScreen({ navigation, loggedInUser, notes, setNotes }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const userNotes = notes.filter(function (item) {
    return item.userEmail === loggedInUser.email;
  });

  const handleAddNote = () => {
    if (title.trim() === "" || content.trim() === "") {
      Alert.alert("Error", "Please write title and content");
      return;
    }

    const newNote = {
      id: Date.now(),
      userEmail: loggedInUser.email,
      title: title,
      content: content,
    };

    setNotes([newNote, ...notes]);
    setTitle("");
    setContent("");
  };

  const handleDelete = (noteId) => {
    const updatedNotes = notes.filter(function (item) {
      return item.id !== noteId;
    });

    setNotes(updatedNotes);
  };

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Create Note</Text>
          <TextInput
            value={title}
            onChangeText={setTitle}
            placeholder="Note title"
            style={styles.input}
            placeholderTextColor="#867e73"
          />
          <TextInput
            value={content}
            onChangeText={setContent}
            placeholder="Write your note"
            style={[styles.input, styles.bigInput]}
            placeholderTextColor="#867e73"
            multiline
          />
          <Pressable style={styles.primaryButton} onPress={handleAddNote}>
            <Text style={styles.primaryText}>Add Note</Text>
          </Pressable>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Your Notes</Text>
          {userNotes.length === 0 ? (
            <Text style={styles.emptyText}>No notes added yet.</Text>
          ) : (
            userNotes.map(function (item) {
              return (
                <View key={item.id} style={styles.noteCard}>
                  <Text style={styles.noteTitle}>{item.title}</Text>
                  <Text style={styles.noteContent}>{item.content}</Text>
                  <Pressable style={styles.deleteButton} onPress={() => handleDelete(item.id)}>
                    <Text style={styles.deleteText}>Delete</Text>
                  </Pressable>
                </View>
              );
            })
          )}
        </View>
      </ScrollView>

      <TabBar navigation={navigation} activeTab="Notes" />
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
    borderRadius: 22,
    padding: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 12,
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
  bigInput: {
    minHeight: 110,
    textAlignVertical: "top",
  },
  primaryButton: {
    backgroundColor: "#d96c3d",
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: "center",
  },
  primaryText: {
    color: "#fff",
    fontWeight: "700",
  },
  noteCard: {
    backgroundColor: "#efe5d0",
    borderRadius: 18,
    padding: 14,
    marginBottom: 12,
  },
  noteTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#1f3b2f",
  },
  noteContent: {
    color: "#4f4a42",
    marginTop: 8,
    lineHeight: 20,
  },
  deleteButton: {
    alignSelf: "flex-start",
    marginTop: 12,
    backgroundColor: "#fffaf3",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  deleteText: {
    color: "#8d3b30",
    fontWeight: "700",
  },
  emptyText: {
    color: "#6b675f",
  },
});
