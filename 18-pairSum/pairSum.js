function pairSum(nums, target) {
	if (nums.length < 2) throw Error;
	let cachedValues = {};
	for (let index = 0; index < nums.length; index++) {
		if (cachedValues[nums[index]] != undefined) return true;
		let additive = target - nums[index];
		cachedValues[additive] = nums[index];
	}
	return false;
}

// Do not edit this line;
module.exports = pairSum;
