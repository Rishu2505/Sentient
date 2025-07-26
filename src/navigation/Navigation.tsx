import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from './RootNavigation';
import ROUTES from 'src/consts/routes';
import OnboardingStack from '../screens/onboarding/navigation/OnboardingStack';
import BottomTabStack from 'src/screens/bottomTabs/navigation/BottomTabStack';
import { colors } from 'src/common';
import CommonStack from './CommonStack';
const Stack = createNativeStackNavigator();

export default function Navigation() {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.APP_BACKGROUND,
    },
  };
  return (
    <NavigationContainer theme={theme} ref={navigationRef}>
      <RootNavigator />
    </NavigationContainer>
  );
}

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ROUTES.ONBOARDING_STACK} component={OnboardingStack} />
      <Stack.Screen name={ROUTES.BOTTOM_TAB_STACK} component={BottomTabStack} />
      <Stack.Screen name={ROUTES.COMMON_STACK} component={CommonStack} />
    </Stack.Navigator>
  );
}
