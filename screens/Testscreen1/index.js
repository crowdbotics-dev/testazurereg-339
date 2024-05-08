import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Testscreen1 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><View style={styles.VRWtXlrp}></View></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  VRWtXlrp: {
    height: 98,
    width: 318,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777",
    position: "absolute",
    left: 12,
    top: 7
  }
});
export default Testscreen1;