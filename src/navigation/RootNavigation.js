import { CommonActions } from "@react-navigation/native";
import * as React from "react";

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export function goBack() {
  if (navigationRef.current?.canGoBack()) {
    navigationRef.current.goBack();
  }
}

export function reset(name, params = {}) {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name, params }],
    })
  );
}
