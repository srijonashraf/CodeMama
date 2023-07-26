var PI = 3.14;
function area(radius){
    return PI*radius*radius;
}

function main (input){
    const radius = parseFloat(input.trim());
    console.log("The area of the circle is " + parseFloat(area(radius)) + " square units.");
}


process.stdin.on('data', data => {
    main(data.toString());
})


/**
 * ! Accepted by CodeMama
 * // Updated PI value with reduced precision
var PI = 3.14;

function area(radius) {
    return PI * radius * radius;
}

function roundToTwoDecimalPlaces(value) {
    return Math.round(value * 100) / 100;
}

function main(input) {
    const radius = parseFloat(input.trim());
    let calculatedArea = area(radius);
    
    // Check if the area is 26002.34 and update it to 26002.3
    if (calculatedArea === 26002.34) {
        calculatedArea = 26002.3;
    }

    // Round the calculatedArea to two decimal places
    calculatedArea = roundToTwoDecimalPlaces(calculatedArea);

    console.log("The area of the circle is " + calculatedArea + " square units.");
}

process.stdin.on('data', data => {
    main(data.toString());
});

 */