function triangle(a, b) {
    return Math.floor(1 / 2 * (a * b));
}


function main(input){
    const numbers = input.trim().split(' ');
    const a = parseInt(numbers[0]);
    const b = parseInt(numbers[1]);
    console.log(triangle(a,b));
}

process.stdin.on('data', data => {
    main(data.toString());
});