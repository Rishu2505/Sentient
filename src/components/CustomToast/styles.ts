import { StyleSheet } from "react-native";
import { colors, fonts, normalize } from "src/common";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: normalize(20),
    paddingVertical: normalize(12),
    borderRadius: normalize(9999),
    marginBottom: normalize(80),
    borderColor: colors.BORDER,
    borderWidth: normalize(1.4),
    width: null,
  },
  icon: {
    marginRight: normalize(10),
  },
  textContainer: {},
  title: {
    fontSize: normalize(14),
    fontFamily: fonts.UrbanistMedium,
    color: colors.WHITE,
    fontWeight: "400",
  },
  infoText: {
    fontSize: normalize(12),
    fontFamily: fonts.UrbanistMedium,
    color: colors.WHITE,
    marginTop: normalize(2),
    fontWeight: "400",
  },
  success: {
    backgroundColor: colors.APP_PRIMARY,
  },
  error: {
    backgroundColor: colors.APP_BACKGROUND,
  },
  info: {
    backgroundColor: colors.APP_BACKGROUND,
  },
});
