import { useCallback } from "react";
import { useChatStore, Message } from "src/stores/useChatStore";

export const useAgentChat = (agentId: string) => {
  const setMessages = useChatStore((state) => state.setMessages);
  const getMessages = useChatStore((state) => state.getMessages);
  const clearMessages = useChatStore((state) => state.clearMessages);

  const save = useCallback(
    (messages: Message[]) => {
      setMessages(agentId, messages);
    },
    [agentId]
  );

  const get = useCallback((): Message[] => {
    return getMessages(agentId);
  }, [agentId]);

  const clear = useCallback(() => {
    clearMessages(agentId);
  }, [agentId]);

  return {
    persistedmessages: get(),
    save,
    clear,
  };
};
