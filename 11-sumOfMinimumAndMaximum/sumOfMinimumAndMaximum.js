function sumOfMinimumAndMaximum(nums) {
	let min = Number.MAX_VALUE;
	let max = Number.MIN_VALUE;
	nums.forEach((element) => {
		min = Math.min(element, min);
		max = Math.max(element, max);
	});
	return min + max;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;
