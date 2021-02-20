import React, { useState } from "react";

import { StyleSheet, Modal, Text, View, TextInput, Button } from "react-native";

const RepoInput = ({ visible, onAddRepo, onClose }) => {
  const [text, setText] = useState("");

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.modalContainer}>
        <Text style={styles.title}>Add new repo</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Repo, e.g: joaquimnet/the-dark"
            autoCapitalize="none"
            value={text}
            onChange={(e) => setText(e.nativeEvent.text)}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="ADD" onPress={(e) => onAddRepo(text)} />
            </View>
            <View style={styles.button}>
              <Button title="CANCEL" onPress={onClose} color="red" />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    padding: 30,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
  },
  textInput: {
    width: "100%",
    borderBottomColor: "#333",
    borderBottomWidth: 1,
    paddingVertical: 10,
    marginVertical: 10,
  },
  inputContainer: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
  buttonContainer: {
    width: "60%",
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "space-evenly",
  },
  button: {
    width: "40%",
  },
});

export default RepoInput;
