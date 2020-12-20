function fizzBuzz(start, end) {
	let output = [];
	for (let value = start; value <= end; value++) {
		let returnString = '';
		if (value % 3 == 0) returnString += 'Fizz';
		if (value % 5 == 0) returnString += 'Buzz';
		if (returnString.length > 0) output.push(returnString);
		else output.push(value);
	}
	return output;
}

// Do not edit this line;
module.exports = fizzBuzz;
