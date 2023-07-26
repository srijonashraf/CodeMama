function leap(year) {
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        return true;
    }
    else {
        return false;
    }
}

function main(input) {
    var number = parseInt(input.trim());
    if (leap(number)) {
        console.log(`${number} is a leap year.`);
    }
    else {
        console.log(`${number} is not a leap year.`);
    }
}

process.stdin.on('data', data => {
    main(data.toString());
});