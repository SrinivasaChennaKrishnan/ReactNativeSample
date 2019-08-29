import { animated } from "react-spring";
import { StyleSheet } from "react-native-web";

export const styles = StyleSheet.create({
  Global: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "aqua"
  },
  Container: {
    zIndex: 10,
    position: "absolute",
    display: "flex",
    alignSelf: "center",
    justifyContent: "center",
    height: "100vh",
    // gridTemplateColumns: repeat(4, minmax(100px, 1fr));
    padding: 25,
    backgroundColor: "white",
    borderRadius: 5
  }
});
