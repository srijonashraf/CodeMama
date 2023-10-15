CalculatePower = (a,b)=>{
    return Math.pow(a,b);
}

function main(input) {
    const numbers = input.trim().split(' ');
    const a = parseInt(numbers[0]);
    const b = parseInt(numbers[1]);
    console.log(CalculatePower(a,b));
}

process.stdin.on('data', data => {
    main(data.toString());
})