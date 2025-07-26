import { StyleSheet } from "react-native";
import { colors, fonts, normalize } from "src/common";

export default StyleSheet.create({
  card: {
    backgroundColor: colors.DARK_GREY,
    padding: normalize(18.12),
    borderRadius: normalize(14.5),
    justifyContent: "center",
    marginBottom: normalize(11.97),
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
  },
  prompt: {
    color: colors.PROMPT_TEXT,
    fontSize: normalize(14.492),
    fontFamily: fonts.UrbanistRegular,
    fontWeight: "500",
    textAlign: "center",
    lineHeight: normalize(23.87),
  },
});
