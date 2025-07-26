import { StyleSheet } from "react-native";
import { colors, fonts, normalize } from "src/common";

export default StyleSheet.create({
  container: {
    paddingHorizontal: normalize(35),
    paddingBottom: normalize(20),
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftIconWrapper: {
    height: normalize(45),
    width: normalize(45),
    borderRadius: normalize(8),
    backgroundColor: colors.DARK_GREY,
    justifyContent: "center",
    alignItems: "center",
  },
  iconWrapper: {
    padding: normalize(0),
  },
  iconPlaceholder: {
    width: normalize(40),
  },
  title: {
    fontSize: normalize(22),
    fontFamily: fonts.PoppinsSemiBold,
    color: colors.WHITE,
    fontWeight: "600",
  },
});
