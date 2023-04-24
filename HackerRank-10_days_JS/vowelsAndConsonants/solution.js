// Assuming an input string 's' of lowercase letters,
// 1. print out all vowels in the order that they appear,
// 2. and then print out all consonants

const s = 'thisisastringwithvowelsandconsonants';


function vowelsAndConsonants(s) {
    const consonants = [];

    // Iterate through the string, printing out vowels or placing consonants in an array
    for (const index in s) {
        switch (s[index]) {
            case 'a':
                console.log(s[index]);
                break;
            case 'e':
                console.log(s[index]);
                break;
            case 'i':
                console.log(s[index]);
                break;
            case 'o':
                console.log(s[index]);
                break;
            case 'u':
                console.log(s[index]);
                break;
            default : {
                consonants.push(s[index]);
            }
        }
    }

    // Print out consonants in the order that they appear
    for (const index in consonants) console.log(consonants[index]);
}

vowelsAndConsonants(s)