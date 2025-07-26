import { StyleSheet } from "react-native";
import { colors, fonts, normalize } from "src/common";

export default StyleSheet.create({
  wrapper: {
    alignItems: "center",
    marginTop: normalize(10),
  },
  container: {
    flexDirection: "row",
    backgroundColor: colors.DARK_GREY,
    paddingLeft: normalize(13.96),
    paddingRight: normalize(4.93),
    height: normalize(48),
    borderRadius: normalize(7),
    alignItems: "center",
    borderColor: colors.BORDER,
    borderWidth: normalize(1),
  },
  input: {
    flex: 1,
    fontSize: normalize(16),
    color: colors.INPUT_TEXT,
    fontFamily: fonts.UrbanistRegular,
    fontWeight: "400",
  },
  sendButton: {
    marginLeft: normalize(19.94),
  },
});
