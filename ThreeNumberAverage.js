function avg(a, b, c) {
    return (a + b + c) / 3;
}

function main(input) {
    const numbers = input.trim().split(' ');
    const a = parseInt(numbers[0]);
    const b = parseInt(numbers[1]);
    const c = parseInt(numbers[2]);

    console.log(parseFloat(avg(a, b, c).toFixed(4)));

}

process.stdin.on('data', data => {
    main(data.toString());
})