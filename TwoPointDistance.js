function dist(a, b, c, d) {
    if (a === c && b === d) {
        return 0;
    } else {
        return Math.sqrt((a - c) * (a - c) + (b - d) * (b - d));
    }
}

function main(input) {
    // Convert the input matrix to a 2D array of numbers
    const matrix = input.trim().split('\n').map(row => row.split(' ').map(parseFloat));

    // Extract the coordinates of the two points from the matrix
    const [x1, y1] = matrix[0];
    const [x2, y2] = matrix[1];

    // Calculate the distance between the two points
    const distance = dist(x1, y1, x2, y2);
    console.log(`Distance: ${distance.toFixed(2)}`);
}

process.stdin.on('data', data => {
    main(data.toString());
});
