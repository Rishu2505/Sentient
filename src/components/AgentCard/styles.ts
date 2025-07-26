import { StyleSheet } from "react-native";
import { colors, fonts, normalize } from "src/common";

export default StyleSheet.create({
  card: {
    width: normalize(129),
    height: normalize(163),
    backgroundColor: colors.DARK_GREY,
    borderRadius: normalize(20.1),
    paddingHorizontal: normalize(9),
    paddingBottom: normalize(11),
    paddingTop: normalize(14),
    justifyContent: "center",
    alignItems: "center",
    marginBottom: normalize(38.99),
  },
  icon: {
    marginBottom: normalize(10),
  },
  title: {
    marginTop: normalize(5),
    color: colors.WHITE,
    fontFamily: fonts.PoppinsRegular,
    fontSize: normalize(16.083),
    marginBottom: normalize(4),
    fontWeight: "400",
    textAlign: "center",
  },
  desc: {
    color: colors.GREY_1,
    fontSize: normalize(10.179),
    fontFamily: fonts.PoppinsRegular,
    marginBottom: normalize(11.05),
    fontWeight: "500",
    textAlign: "center",
  },
  arrowContainer: {
    alignItems: "center",
    justifyContent:'center',
    backgroundColor: colors.CIRCLE_ARROW,
    height: normalize(34),
    width: normalize(34),
    borderRadius: normalize(34),
  },
});
