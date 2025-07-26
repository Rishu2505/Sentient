import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppOnboardingScreen from '..';
import { ROUTES } from 'src/consts';

const Stack = createNativeStackNavigator();

function OnboardingNavigation() {
  return (
    <>
      <Stack.Navigator
        initialRouteName={ROUTES.SPLASH}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name={ROUTES.SPLASH}
          component={AppOnboardingScreen}
        />
      </Stack.Navigator>
    </>
  );
}

export default OnboardingNavigation;
