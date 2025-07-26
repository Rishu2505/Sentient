import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Agents from '..';
import { ROUTES } from 'src/consts';
import { RootStackParamList } from 'src/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

function HomeStack() {
  return (
    <>
      <Stack.Navigator
        initialRouteName={ROUTES.AGENTS}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={ROUTES.AGENTS} component={Agents} />
      </Stack.Navigator>
    </>
  );
}

export default HomeStack;
