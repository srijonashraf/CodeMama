// function dist(a, b, c, d) {
//     if (a === c && b === d) {
//         return 0;
//     } else {
//         return Math.sqrt((a - c) * (a - c) + (b - d) * (b - d));
//     }
// }

// function main(input) {
//     const numbers = input.trim().split(' ').map(parseFloat);
//     const a = numbers[0];
//     const b = numbers[1];
//     const c = numbers[2];
//     const d = numbers[3];

//     const distance = dist(a, b, c, d);
//     console.log(distance.toFixed(2));
// }

// process.stdin.on('data', data => {
//     main(data.toString());
// });




let firstPointInput = "";
let secondPointInput = "";

function dist(a, b, c, d) {
    if (a === c && b === d) {
        return 0;
    } else {
        return Math.sqrt((a - c) * (a - c) + (b - d) * (b - d));
    }
}

function main(input) {
    if (!firstPointInput) {
        firstPointInput = input;
    } else if (!secondPointInput) {
        secondPointInput = input;

        const [x1, y1] = firstPointInput.trim().split(" ").map(parseFloat);
        const [x2, y2] = secondPointInput.trim().split(" ").map(parseFloat);

        const distance = dist(x1, y1, x2, y2);
        console.log(distance.toFixed(5));
    }
}

process.stdin.on('data', data => {
    main(data.toString());
});
