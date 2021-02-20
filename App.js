import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";

import RepoItem from "./components/RepoItem";
import RepoInput from "./components/RepoInput";

export default function App() {
  const [inputVisible, setInputVisible] = useState(true);
  const [repos, setRepos] = useState([{ key: "unique", value: "the-dark" }]);

  const onAddRepo = (repo) => {
    const newItem = repo.trim();
    if (newItem) {
      setInputVisible(false);
      setRepos((currentRepos) => [
        ...currentRepos,
        { key: Math.random().toString(), value: repo },
      ]);
    }
  };

  const onDelete = (key) => {
    setRepos((currentRepos) => currentRepos.filter((repo) => repo.key !== key));
  };

  return (
    <View style={styles.container}>
      <View style={styles.addButtonContainer}>
        <Button
          style={styles.addButtonContainer}
          title="Add New Repo"
          onPress={() => setInputVisible(true)}
        />
      </View>
      <FlatList
        data={repos}
        renderItem={(itemData) => (
          <RepoItem
            repo={itemData.item.value}
            onDelete={() => onDelete(itemData.item.key)}
          />
        )}
      />
      <RepoInput visible={inputVisible} onAddRepo={onAddRepo} onClose={() => setInputVisible(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  addButtonContainer: {
    paddingTop: 30,
    paddingBottom: 15,
  },
});
