import { StyleSheet } from "react-native";
import { normalize } from "src/common";

const styles = StyleSheet.create({
  tab: {
    flex: 1,
  },
  tabContent: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    paddingTop: normalize(20),
  },
  dotStyle: {
    width: normalize(7.21),
    height: normalize(7.21),
    borderRadius: normalize(99999),
    backgroundColor: "transparent",
    alignSelf: "center",
    marginTop: normalize(10),
  },
});

export default styles;
