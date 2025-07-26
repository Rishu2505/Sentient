import { StyleSheet } from "react-native";
import { normalize, colors, fonts } from "src/common";

export default StyleSheet.create({
  messageContainer: {
    marginVertical: normalize(0),
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: normalize(29),
    marginBottom: normalize(29),
  },
  promptText: {
    color: colors.WHITE,
    fontFamily: fonts.UrbanistRegular,
    fontWeight: "500",
    fontSize: normalize(11.822),
    flexShrink: 1,
    paddingHorizontal: normalize(17),
  },
  aiContainer: {
    backgroundColor: colors.DARK_GREY,
    marginHorizontal: -normalize(34),
    paddingHorizontal: normalize(35),
    paddingTop: normalize(13),
    paddingBottom: normalize(32),
  },
  margin: {
    marginLeft: normalize(8),
  },
  aiHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: normalize(19.65),
  },
  responseBox: {},
  responseText: {
    color: colors.PROMPT_TEXT,
    fontSize: normalize(11.822),
    lineHeight: normalize(20),
    fontWeight: "500",
    fontFamily: fonts.UrbanistRegular,
  },
  regenerateContainer: {
    alignItems: "center",
    marginTop: normalize(52.48),
  },
  regenerateButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.DARK_GREY,
    padding: normalize(11.53),
    borderRadius: normalize(8.64),
    borderWidth: normalize(1.4),
    borderColor: colors.BORDER,
  },
  regenerateText: {
    color: colors.PROMPT_TEXT,
    fontFamily: fonts.UrbanistRegular,
    fontWeight: "500",
    fontSize: normalize(12.97),
    marginLeft: normalize(15),
  },
  typingDots: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: normalize(6),
    paddingVertical: normalize(0),
  },
  dot: {
    width: normalize(8),
    height: normalize(8),
    borderRadius: normalize(4),
    backgroundColor: "white",
  },
  sentientLogo: {
    width: normalize(35),
    height: normalize(35),
    marginRight: normalize(5),
  },
});
