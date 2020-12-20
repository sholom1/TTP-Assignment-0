function countOfAllBooleansAndStrings(arr) {
	let count = 0;
	arr.forEach((element) => {
		let type = typeof element;
		if (type === 'string' || type === 'boolean') count++;
	});
	return count;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;
