// ProfileScreen.styles.ts
import { StyleSheet } from "react-native";
import { colors, fonts, normalize } from "src/common";
import { getStatusBarHeight } from "src/common/helper";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.APP_BACKGROUND,
    paddingTop: getStatusBarHeight(),
  },
  mainView: {
    paddingHorizontal: normalize(35),
    paddingBottom: normalize(120) 
  },
  avatarContainer: {
    alignItems: "center",
  },
  avatar: {
    width: normalize(90),
    height: normalize(90),
    marginBottom: normalize(10),
  },
  nameEmailContainer: {
    alignItems: "center",
    marginBottom: normalize(10),
  },
  name: {
    fontSize: normalize(20),
    fontFamily: fonts.PoppinsMedium,
    color: colors.WHITE,
    fontWeight: "500",
    textAlign: "center",
  },
  infoContainer: {
    alignItems: "center",
  },
  email: {
    fontSize: normalize(14),
    fontWeight: "400",
    color: colors.GREY,
    fontFamily: fonts.PoppinsRegular,
    textAlign: "center",
  },
  info: {
    fontSize: normalize(13),
    color: colors.WHITE,
    fontFamily: fonts.UrbanistRegular,
    fontWeight: "400",
    textAlign: "left",
  },
});

export default styles;
