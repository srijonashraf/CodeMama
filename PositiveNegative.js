function numberType(number) {
    if (number > 0) {
        console.log(number + " is a positive number.");
    }

    else if (number === 0) {
        console.log("The number is zero.");

    }
    else {
        console.log(number + " is a negative number.");
    }
}



function main(input) {
    const number = parseInt(input.trim());
    numberType(number);
}

process.stdin.on('data', data => {
    main(data.toString());
})