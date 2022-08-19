const content =
	"\n## Can I redeclare let and const variables?\n\nNo, you cannot redeclare let and const variables. If you do, it throws below error\n\n```properties\nUncaught SyntaxError: Identifier 'someVariable' has already been declared\n```\n";

// Remove first line
const contentWithoutFirstHeading = content.replace(/^#.*\n/, '');
console.log(contentWithoutFirstHeading);
