const palindromes = function (word) {
    processed_word = word.toLowerCase().replace(/[^a-z0-9]/g, "")
    rev_word = processed_word.split("").reverse().join("")
    return processed_word == rev_word
};

// Do not edit below this line
module.exports = palindromes;
