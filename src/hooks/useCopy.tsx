export const useCopy = (text: string) => {
	const handleCopyText = async () => {
		return await navigator.clipboard.writeText(text)
	}
	return { handleCopyText }
}
