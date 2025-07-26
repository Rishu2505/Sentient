import { StyleSheet } from "react-native";
import { colors, normalize } from "src/common";
import { getStatusBarHeight } from "src/common/helper";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.APP_BACKGROUND,
    paddingTop: getStatusBarHeight(),
  },
  mainView: {
    flex: 1,
  },
  chatList: {
    paddingBottom: normalize(0),
    paddingHorizontal: normalize(34),
  },
});

export default styles;
