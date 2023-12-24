function isRepdigit(number) {
    const digit = String(number)[0];  // Get the first digit as a string
    const repdigit = Array(String(number).length).fill(digit).join('');  // Create a repdigit with the same digit

    return String(number) === repdigit;
}

function main(input) {
    const number = parseInt(input.trim());
    const result = isRepdigit(number);
    console.log(result);
}

process.stdin.on('data', data => {
    main(data.toString());
});
