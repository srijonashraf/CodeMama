function minimumNumber(a, b, c) {
    return Math.max(a, b, c);
}

function main(input) {
    const numbers = input.trim().split(' ');
    const a = parseInt(numbers[0]);
    const b = parseInt(numbers[1]);
    const c = parseInt(numbers[2]);
    console.log(minimumNumber(a, b, c));

}

process.stdin.on('data', data => {
    main(data.toString());
})