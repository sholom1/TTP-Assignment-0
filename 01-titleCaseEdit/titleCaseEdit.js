function titleCaseEdit(title) {
	let regex = /(\b[a-z])+/g;
	return title.replace(regex, (x) => x.toUpperCase());
}

// Do not edit this line;
module.exports = titleCaseEdit;
