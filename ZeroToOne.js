function convertWordToNumber(word) {
    const numberMap = {
        'zero': 0,
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'five': 5,
        'six': 6,
        'seven': 7,
        'eight': 8,
        'nine': 9
    };

    return numberMap[word];
}

function main(input) {
    // Parse the input string to get the word
    const word = input.trim().toLowerCase();

    // Convert the word to a number
    const number = convertWordToNumber(word);

    // Calculate the remainder when divided by 2
    const remainder = number % 2;

    // Print the result (0 or 1)
    console.log(remainder);
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input);
});
