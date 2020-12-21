function productOfAnyAmountOfNumbers(...args) {
	let product = 1;
	for (const value of args) {
		product *= value;
	}
	return product;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;
