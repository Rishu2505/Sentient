import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from '..';
import { ROUTES } from 'src/consts';
import { RootStackParamList } from 'src/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

function CategoriesStack() {
  return (
    <>
      <Stack.Navigator
        initialRouteName={ROUTES.CATEGORIES}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={ROUTES.CATEGORIES} component={Categories} />
      </Stack.Navigator>
    </>
  );
}

export default CategoriesStack;
