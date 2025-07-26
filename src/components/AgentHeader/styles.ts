import { StyleSheet } from "react-native";
import { colors, fonts, normalize } from "src/common";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: normalize(35),
    marginBottom: normalize(33),
  },
  title: {
    fontSize: normalize(22),
    fontFamily: fonts.PoppinsRegular,
    color: colors.WHITE,
    fontWeight: "400",
  },
});
