import responseData from 'src/assets/jsons/final_dynamic_prompt_responses.json';

type PromptEntry = {
  title: string;
  data: { id: string; response: string }[];
};

export const getRandomResponseByPrompt = (title: string): string | null => {
  const entry = (responseData as PromptEntry[]).find(item => item.title === title);

  if (!entry || entry.data.length === 0) return null;

  const randomIndex = Math.floor(Math.random() * entry.data.length);
  return entry.data[randomIndex].response;
};
