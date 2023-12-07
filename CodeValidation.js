function isValidCode(input) {
    // Remove leading and trailing whitespaces
    const code = input.trim();

    // Check if the code starts with '#' and is exactly 7 characters long
    if (code.length === 7 && code.charAt(0) === '#') {
        // Check each character in the code
        for (let i = 1; i < code.length; i++) {
            const char = code.charAt(i);

            // Check if the character is a digit or an alphabetic character from A-F
            if (!((char >= '0' && char <= '9') || (char >= 'a' && char <= 'f') || (char >= 'A' && char <= 'F'))) {
                return false;
            }
        }

        // If all characters are valid, return true
        return true;
    }

    // If the code does not meet the criteria, return false
    return false;
}

function main(input) {
    const result = isValidCode(input);
    console.log(result ? "true" : "false");
}

let inputString = "";
process.stdin.on('data', (chunk) => {
    inputString += chunk;
});

process.stdin.on('end', () => {
    main(inputString.trim());
});
