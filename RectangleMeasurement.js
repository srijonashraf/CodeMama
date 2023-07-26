/**
 * Multiply two numbers.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @return {number} The product of the two numbers.
 */
function rec(a, b) {
    return a * b;
}

/**
 * Parse an input string, calculate the product of two numbers, and log the result.
 *
 * @param {string} input - The input string.
 * @return {undefined} This function does not return a value.
 */
function main(input) {
    const numbers = input.trim().split(' ');
    const a = parseInt(numbers[0]);
    const b = parseInt(numbers[1]);
    console.log(rec(a, b));
}

process.stdin.on('data', data => {
    main(data.toString());
})
