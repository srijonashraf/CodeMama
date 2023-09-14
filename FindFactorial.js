

FindFactorial = (number) =>{
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial = factorial * i;
    }
    return factorial;
}

function main (input){
    const number = parseInt(input.trim());
    console.log(FindFactorial(number));
}

process.stdin.once('data', data => {
    main(data.toString());
});
