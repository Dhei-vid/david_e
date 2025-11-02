/**
 * Splitting String Function
 * @param content
 * @returns
 */
export const splitString = (content: string): string[] => {
  const characters: string[] = [];
  const regex = /[\s\S]/gu;

  let match;

  while ((match = regex.exec(content)) !== null) {
    characters.push(match[0]);
  }

  return characters;
};
