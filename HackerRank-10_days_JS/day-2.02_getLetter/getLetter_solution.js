// Output either 'A' 'B' 'C' or 'D' depending on the value of the first character of a given string
// If the first character is a vowel, i.e. a, e, i, o, u - return A
// If the first character is either b, c, d, f, g - return B
// If its h, j, k, l, m - return C
// Return D for any other letter

// Given string consists of lowercase letters of the english alphabet
const s = 'jdfgt';

function getLetter(s) {
    let letter;

    // Getting the first character of the given string
    const firstChar = s[0];

    switch (firstChar) {
        // Evaluating if it's a vowel
        case 'a' || 'e' || 'i' || 'o' || 'u':
            letter = 'A';
            break;

        // Evaluating against other letters
        case 'b' || 'c' || 'd' || 'f' || 'g':
            letter = 'B';
            break;

        case 'h' || 'j' || 'k' || 'l' || 'm':
            letter = 'C';
            break;

        default: letter = 'D'
    }

    return letter;
}

console.log(getLetter(s));