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
