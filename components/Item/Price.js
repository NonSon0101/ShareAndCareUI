import { StyleSheet, View, Text } from "react-native";

import Gift from "../icons/Gift";
export default function Price(props) {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Gift />
      </View>
      <Text style={styles.text}>{props.Price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#EFEFEF",
    justifyContent: "space-evenly",
    height: 24,
    width: 100,
    alignItems: "center",
    padding: 2,
    borderRadius: 20,
  },

  icon: {
    alignItems: "center",
  },

  text: {
    fontWeight: "600",
  },
});
