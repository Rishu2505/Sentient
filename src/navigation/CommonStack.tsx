import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from 'src/consts';
import { RootStackParamList } from 'src/types';
import AgentHome from 'src/screens/bottomTabs/tabs/Home/screens/pages/AgentHome';
import AgentChat from 'src/screens/bottomTabs/tabs/Home/screens/pages/AgentChat';

const Stack = createNativeStackNavigator<RootStackParamList>();

function CommonStack() {
  return (
    <>
      <Stack.Navigator
        initialRouteName={ROUTES.AGENT_HOME}
        screenOptions={{
          headerShown: false,
        }}>
       <Stack.Screen name={ROUTES.AGENT_HOME} component={AgentHome} />
       <Stack.Screen name={ROUTES.AGENT_CHAT} component={AgentChat} />
      </Stack.Navigator>
    </>
  );
}

export default CommonStack;
