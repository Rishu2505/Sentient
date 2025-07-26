import { StyleSheet } from "react-native";
import { normalize } from "src/common";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  splashIcon: {
    height: normalize(120),
    width: normalize(300),
  },
});

export default styles;
