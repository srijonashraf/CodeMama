function swap(a, b) {
    [a, b] = [b, a];
    console.log(`After swapping: num1 = ${a}, num2 = ${b}`);
}

function main(input) {
    const numbers = input.trim().split(' ');
    const num1 = parseInt(numbers[0]);
    const num2 = parseInt(numbers[1]);
    console.log(`Before swapping: num1 = ${num1}, num2 = ${num2}`);
    swap(num1,num2);

}


process.stdin.on('data', data => {
    main(data.toString());
});