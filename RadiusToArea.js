var PI = 3.14;

function area(radius) {
    return PI * radius * radius;
}

function formatToTwoDecimalPlaces(value) {
    return value.toFixed(2);
}

function main(input) {
    const radius = parseFloat(input.trim());
    let calculatedArea = area(radius);

    // Format the calculatedArea to two decimal places
    calculatedArea = formatToTwoDecimalPlaces(calculatedArea);

    console.log("The area of the circle is " + calculatedArea + " square units.");
}

process.stdin.on('data', data => {
    main(data.toString());
});
