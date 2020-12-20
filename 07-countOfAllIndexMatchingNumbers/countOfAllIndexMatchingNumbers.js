function countOfAllIndexMatchingNumbers(nums) {
	let count = 0;
	for (let index = 0; index < nums.length; index++) {
		if (nums[index] == index) count++;
	}
	return count;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;
