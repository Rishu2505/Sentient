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
    paddingBottom: normalize(87.35) 
  },
  chipList: {
    paddingHorizontal: normalize(35),
    paddingTop: normalize(27),
    paddingBottom: normalize(46),
  },
  agentList: {
    paddingHorizontal: normalize(35),
    paddingBottom: normalize(0),
    gap: normalize(20),
  },
});

export default styles;
