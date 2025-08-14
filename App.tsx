import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Navigation from './src/navigation/Navigation';
import * as Font from 'expo-font';
import { useEffect, useState } from 'react';
import Toast, { BaseToastProps } from 'react-native-toast-message';
import { CustomToast } from 'src/components';

const toastConfig = {
  success: (props: BaseToastProps) => (
    <CustomToast {...props} type="success" text1={props.text1 ?? ""} text2={props.text2 ?? ""} />
  ),
  error: (props: BaseToastProps) => (
    <CustomToast {...props} type="error" text1={props.text1 ?? ""} text2={props.text2 ?? ""} />
  ),
  info: (props: BaseToastProps) => (
    <CustomToast {...props} type="info" text1={props.text1 ?? ""} text2={props.text2 ?? ""} />
  ),
};
export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      PoppinsMedium: require('./src/assets/fonts/Poppins-Medium.ttf'),
      PoppinsRegular: require('./src/assets/fonts/Poppins-Regular.ttf'),
      PoppinsSemiBold: require('./src/assets/fonts/Poppins-SemiBold.ttf'),
      UrbanistMedium: require('./src/assets/fonts/Urbanist-Medium.ttf'),
      UrbanistRegular: require('./src/assets/fonts/Urbanist-Regular.ttf'),
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) return null;
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Navigation />
      <Toast config={toastConfig} />
    </GestureHandlerRootView>
  );
}
