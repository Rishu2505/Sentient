import React, { useEffect, useState } from 'react';
import { Platform, UIManager, View, ActivityIndicator, KeyboardAvoidingView, Keyboard, } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import styles from './styles';
import { CustomHeader, Input, PromptsCard } from 'src/components';
import { ROUTES } from 'src/consts';
import { normalize } from 'src/common';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { navigate } from 'src/navigation/RootNavigation';
import { strings } from './constants';
import { getAllPrompts } from '../Home/screens/utils/allPromptUtils';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental?.(true);
}

interface Prompt {
  id: string;
  prompt: string;
}

const History = () => {
  const [prompts, setPrompts] = useState<Prompt[] | null>(null);
  const [loading, setLoading] = useState(true);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    const loadPrompts = async () => {
      setLoading(true);
      const data = getAllPrompts();
      setPrompts(data);
      setLoading(false);
    };

    loadPrompts();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#000" />;
  }

  const navigateToAgentsChat = (prompt: string) => () => {
    Keyboard.dismiss();
    navigate(ROUTES.COMMON_STACK, { screen: ROUTES.AGENT_CHAT, params: { prompt: prompt } })
  }

  return (
    <View style={styles.container}>
      <CustomHeader title={strings.title} />
      <KeyboardAvoidingView
        style={styles.mainView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? -insets.bottom + normalize(10) : 0}>
        <FlashList
          data={prompts}
          estimatedItemSize={100}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item, index }) => (
            <PromptsCard
              index={index}
              id={item.id}
              prompt={item.prompt}
              onPress={navigateToAgentsChat(item.prompt)}
            />
          )}
          contentContainerStyle={styles.promptsList}
          showsVerticalScrollIndicator={false}
        />
        <Input onSend={(msg) => navigateToAgentsChat(msg)()} />
      </KeyboardAvoidingView>
    </View>
  );
}
export default History;