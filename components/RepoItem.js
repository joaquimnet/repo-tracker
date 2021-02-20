import React from "react";

import { StyleSheet, View, Text, TouchableNativeFeedback } from "react-native";

const RepoItem = ({ repo, onDelete }) => {
  return (
    <TouchableNativeFeedback onPress={onDelete}>
      <View style={styles.listItem}>
        <Text>{repo}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  listItem: {
    height: 64,
    justifyContent: 'center',
    padding: 10,
    backgroundColor: "#eee",
    borderBottomWidth: 1,
    borderBottomColor: "#777",
    borderLeftWidth: 8,
    borderLeftColor: "#333",
    marginVertical: 5,
  },
});

export default RepoItem;
