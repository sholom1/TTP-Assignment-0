function countOfAllBooleans(arr) {
	let count = 0;
	for (let index = 0; index < arr.length; index++) {
		if (arr[index] === true || arr[index] === false) count++;
	}
	return count;
}

// Do not edit this line;
module.exports = countOfAllBooleans;
