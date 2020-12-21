function isPalindrome(word) {
	if (word[0] == word[word.length - 1]) {
		return word.length > 1 ? isPalindrome(word.substring(1, word.length - 1)) : true;
	}
	return false;
}

// Do not edit this line;
module.exports = isPalindrome;
