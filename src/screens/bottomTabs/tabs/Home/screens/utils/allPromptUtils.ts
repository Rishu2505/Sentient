import allPrompts from "src/assets/jsons/all_dynamic_structured_prompts.json";
interface Prompt {
  id: string;
  prompt: string;
}

interface PromptBlock {
  title: string;
  data: Prompt[];
}

export const getAllPrompts = (): Prompt[] => {
  return allPrompts.reduce((acc: Prompt[], block: PromptBlock) => {
    const uniqueData = block.data.map((item, index) => ({
      ...item,
      id: `${block.title.replace(/\s+/g, "-").toLowerCase()}-${
        item.id || index
      }`,
    }));
    return [...acc, ...uniqueData];
  }, []);
};
