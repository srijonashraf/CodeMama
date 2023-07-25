function CalcTemp (celsius)
{
    return celsius * 1.8 + 32;
}

function main(input) {
    temp = parseInt(input.trim());   
    console.log("The temperature in Fahrenheit is: " + CalcTemp(temp).toFixed(2));

}

process.stdin.on('data', data => {
    main(data.toString());
})