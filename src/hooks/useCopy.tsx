export const useCopy = () => {
  const handleCopyText = async (text: string) => {
    return await navigator.clipboard.writeText(text);
  };
  return { handleCopyText };
};
