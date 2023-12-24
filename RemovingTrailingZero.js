function removeTrailingZeroes(numberString) {
    const parts = numberString.split('.');

    if (parts.length === 2) {
        const integerPart = parts[0];
        const decimalPart = parts[1].replace(/0+$/, ''); // Remove trailing zeros

        // If the decimal part becomes empty, remove the decimal point
        return decimalPart.length > 0 ? integerPart + '.' + decimalPart : integerPart;
    } else {
        // Preserve leading zeros for integers
        return numberString;
    }
}

function main(input) {
    const numberString = input.trim();
    const result = removeTrailingZeroes(numberString);
    console.log(result);
}

process.stdin.on('data', data => {
    main(data.toString());
});
