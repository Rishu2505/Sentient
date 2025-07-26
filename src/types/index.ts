import { StyleProp, ViewStyle } from "react-native";

export type RootStackParamList = {
  // ---- Stacks ----
  ONBOARDING_STACK: undefined;
  BOTTOM_TAB_STACK: undefined;

  // ---- Screens ----
  SPLASH: undefined;

  // ---- Dashboard Tabs ----
  LEARN_STACK: undefined;
  COMMON_STACK: undefined;
  AGENTS: undefined;
  AGENT_HOME:  { description?: string };
  AGENT_CHAT: { prompt?: string };

  CATEGORIES_STACK: undefined;
  CATEGORIES: undefined;

  HISTORY_STACK: undefined;
  HISTORY: undefined;

  PROFILE_STACK: undefined;
  PROFILE: undefined;
};
