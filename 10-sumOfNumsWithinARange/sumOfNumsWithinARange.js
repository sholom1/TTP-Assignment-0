function sumOfNumsWithinARange(nums, start, end) {
	let count = 0;
	nums.forEach((element) => {
		if (start <= element && element <= end) count++;
	});
	return count;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;
