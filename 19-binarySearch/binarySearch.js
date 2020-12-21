class MySolution {
	constructor() {
		this.flag = false; // this is optional to use;
	}

	binarySearch(nums, target) {
		let mid = Math.floor(nums.length / 2);
		if (target == nums[mid]) return true;
		else if (nums.length > 1) {
			if (target > nums[mid]) return this.binarySearch(nums.slice(mid), target);
			else if (target < nums[mid]) return this.binarySearch(nums.slice(0, mid), target);
		}
		return false;
	}
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
