import { StyleSheet } from "react-native";
import { colors, fonts, normalize } from "src/common";

export default StyleSheet.create({
  chip: {
    backgroundColor: colors.DARK_GREY,
    paddingHorizontal: normalize(12),
    height: normalize(48),
    borderRadius: normalize(19.6),
    marginRight: normalize(13),
    justifyContent: "center",
  },
  contentRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  active: {},
  label: {
    color: colors.IN_ACTIVE_CHIPS,
    fontSize: normalize(15.68),
    fontFamily: fonts.PoppinsRegular,
    fontWeight: "500",
    marginRight: normalize(10),
  },
  activeLabel: {
    color: colors.WHITE,
    fontSize: normalize(15.68),
    fontFamily: fonts.PoppinsRegular,
    fontWeight: "500",
    marginRight: normalize(10),
  },
});
