export const asyncForEach = async (array: any[], callback: any) => {
	for (let index = 0; index < array.length; index++) {
		await callback(array[index], index, array);
	}
};

// to capitalize first letter of each word in a string
export const capitalize = (str: string) => {
	return str.replace(/\w\S*/g, (txt: string) => {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
};

export const slugFromPath = (path: any) =>
	path.match(/([\w-]+)\.(svelte\.md|md|svx)/i)?.[1] ?? null;

// get alpabats by index
export const getAlphabets = (index: number) => {
	const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	return alphabets.charAt(index);
};

// remove string 1st character
export const removeFirstCharacter = (str: string) => str.slice(1);
