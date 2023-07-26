function diff(a,b){
    return Math.abs(a-b);
}


function main (input){
    const numbers = input.trim().split(' ');
    const a = parseInt(numbers[0]);
    const b = parseInt(numbers[1]);
    console.log(diff(a,b));
}


process.stdin.once('data', data => {
    main(data.toString());
});
