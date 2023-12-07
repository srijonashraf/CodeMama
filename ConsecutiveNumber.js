function main(input) {
    const lines = input.trim().split('\n');
    const N = parseInt(lines[0]);
    const M = lines[1].split(' ').map(Number);

    // Sort the array
    M.sort((a, b) => a - b);

    // Check if the elements can be rearranged to form a consecutive list
    for (let i = 0; i < N - 1; i++) {
        if (M[i + 1] - M[i] !== 1) {
            console.log("false");
            return;
        }
    }

    console.log("true");
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});
