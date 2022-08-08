import { browser } from '$app/env';
import fs from 'fs';
import path from 'path';
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
// is user fully scrolled down while reading a page
export const isUserFullyScrolled = () => {
	if (browser) {
		const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		const scrollHeight = document.documentElement.scrollHeight;
		const clientHeight = document.documentElement.clientHeight;
		return scrollTop + clientHeight >= scrollHeight;
	}
};

export const fromDir = (startPath: string, filter: string, callback: any) => {
	if (!fs.existsSync(startPath)) {
		console.log('no dir ', startPath);
		return;
	}
	const files = fs.readdirSync(startPath);
	for (let i = 0; i < files.length; i++) {
		const filename = path.join(startPath, files[i]);
		const stat = fs.lstatSync(filename);
		if (stat.isDirectory()) {
			fromDir(filename, filter, (res: any) => {
				callback?.(res);
			}); //recurse
		} else if (filename.endsWith(filter)) {
			callback?.(filename);
		}
	}
};
