function frequencyCounter(word) {
	let letters = {};
	for (const element of word) {
		if (letters[element] != undefined) {
			letters[element]++;
		} else {
			letters[element] = 1;
		}
	}
	return letters;
}

// Do not edit this line;
module.exports = frequencyCounter;
