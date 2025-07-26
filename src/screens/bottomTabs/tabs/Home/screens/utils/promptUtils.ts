interface Prompt {
  id: string;
  prompt: string;
}

interface PromptBlock {
  title: string;
  data: Prompt[];
}

import allPrompts from "src/assets/jsons/all_dynamic_structured_prompts.json";

export const getPromptsByDescription = (title: string): Prompt[] | null => {
  const match = allPrompts.find((item: PromptBlock) => item.title === title);
  return match ? match.data : null;
};
