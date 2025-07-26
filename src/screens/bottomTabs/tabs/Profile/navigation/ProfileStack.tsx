import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '..';
import { RootStackParamList } from 'src/types';
import { ROUTES } from 'src/consts';

const Stack = createNativeStackNavigator<RootStackParamList>();

function ProfileStack() {
  return (
    <>
      <Stack.Navigator
        initialRouteName={ROUTES.PROFILE}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={ROUTES.PROFILE} component={Profile} />
      </Stack.Navigator>
    </>
  );
}

export default ProfileStack;
