import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import History from '..';
import { RootStackParamList } from 'src/types';
import { ROUTES } from 'src/consts';

const Stack = createNativeStackNavigator<RootStackParamList>();

function HistoryStack() {
  return (
    <>
      <Stack.Navigator
        initialRouteName={ROUTES.HISTORY}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={ROUTES.HISTORY} component={History} />
      </Stack.Navigator>
    </>
  );
}

export default HistoryStack;
