import React, { useEffect, useState, useRef } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  UIManager,
  View,
} from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ChatMessageBubble, CustomHeader, Input } from 'src/components';
import { RootStackParamList } from 'src/types';
import { ROUTES } from 'src/consts';
import styles from './styles';
import { normalize } from 'src/common';
import { strings } from './constants';
import { getRandomResponseByPrompt } from '../../utils/responseUtils';
import { useAIResponse, useHaptics } from 'src/hooks';
import { useAgentChat } from 'src/hooks/useAgentChat';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental?.(true);
}

type Message = {
  id: string;
  text: string;
  isSender: boolean;
  isLoading?: boolean;
};

const AgentChat = () => {
  const route = useRoute<RouteProp<RootStackParamList, ROUTES.AGENT_CHAT>>();
  const { getResponse, } = useAIResponse();
  const prompt = route.params?.prompt;
  const insets = useSafeAreaInsets();
  const listRef = useRef<FlashList<Message>>(null);

  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const { selection } = useHaptics();

  const { save } = useAgentChat('all-agents-chat');

  useEffect(() => {
    if (messages?.length > 0) {
      save(messages);
    }
  }, [messages]);

  const scrollToBottom = () => {
    requestAnimationFrame(() => {
      listRef.current?.scrollToEnd({ animated: true });
    });
  };

  const generateResponse = async (text: string, replaceLast = false) => {
    setLoading(true);
    const typingId = `typing-${Date.now()}`;

    if (replaceLast) {

      setMessages(prev => {
        const reversed = [...prev].reverse();
        const index = reversed.findIndex(m => !m.isSender);
        if (index !== -1) {
          const actualIndex = prev.length - 1 - index;
          const newMessages = [...prev];
          newMessages[actualIndex] = {
            id: typingId,
            text: '',
            isSender: false,
            isLoading: true,
          };
          return newMessages;
        }
        return prev;
      });

    } else {
      setMessages(prev => [
        ...prev,
        { id: typingId, text: '', isSender: false, isLoading: true },
      ]);
    }
    const live_OPENAI_API = true;
    scrollToBottom();
    if (!live_OPENAI_API) {
      await new Promise(resolve => setTimeout(resolve, 1200));
    }

    const response = !live_OPENAI_API ? await getRandomResponseByPrompt(text) : await getResponse(text);

    setMessages(prev => {
      const index = prev.findIndex(m => m.id === typingId);
      if (index === -1) return prev;

      const updated = [...prev];
      updated[index] = {
        id: `response-${Date.now()}`,
        text: response ?? 'Hang on — we’re resolving a temporary issue.',
        isSender: false,
      };
      return updated;
    });

    setLoading(false);
    selection()
    scrollToBottom();
  };

  useEffect(() => {
    if (!prompt) return;

    const init = async () => {
      setLoading(true);
      const initial: Message[] = [
        {
          id: `prompt-${Date.now()}`,
          text: prompt,
          isSender: true,
        },
      ];
      setMessages(initial);
      scrollToBottom();
      await generateResponse(prompt);
    };

    init();
  }, [prompt]);

  const handleSend = (msg: string) => {
    const newId = `user-${Date.now()}`;
    setMessages(prev => [
      ...prev,
      {
        id: newId,
        text: msg,
        isSender: true,
      },
    ]);
    generateResponse(msg);
  };


  const handleRegenerate = () => {
    const lastUserPrompt = [...messages].reverse().find(m => m.isSender)?.text;
    if (lastUserPrompt) {
      selection()
      generateResponse(lastUserPrompt, true);
    }
  };

  return (
    <View style={styles.container}>
      <CustomHeader
        left_icon="chevron-left"
        right_icon="dots-horizontal"
        title={strings.title}
      />
      <KeyboardAvoidingView
        style={styles.mainView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={
          Platform.OS === 'ios' ? -insets.bottom + normalize(10) : 0
        }
      >
        <FlashList
          ref={listRef}
          data={messages}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) => {
            const isLastAI =
              !item.isSender &&
              !item.isLoading &&
              !messages.slice(index + 1).some(m => !m.isSender);

            return (
              <ChatMessageBubble
                message={item.text}
                isSender={item.isSender}
                isLoading={item.isLoading}
                isLastAIMessage={isLastAI}
                onRegenerate={isLastAI ? handleRegenerate : undefined}
                index={index}
              />
            );
          }}
          estimatedItemSize={100}
          contentContainerStyle={styles.chatList}
          showsVerticalScrollIndicator={false}
        />
        <Input onSend={handleSend} />
      </KeyboardAvoidingView>
    </View>
  );
};

export default AgentChat;
