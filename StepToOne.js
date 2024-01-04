function minStepsToOne(n) {
    // Base case: If n is already 1, no steps needed
    if (n === 1) {
        return 0;
    }

    // Initialize an array to store the minimum steps for each number from 1 to n
    const dp = new Array(n + 1).fill(0);

    // Calculate minimum steps for each number from 2 to n
    for (let i = 2; i <= n; i++) {
        // Initialize dp[i] with one more step than dp[i-1] (subtracting 1)
        dp[i] = dp[i - 1] + 1;

        // If i is divisible by 2, update dp[i] with minimum steps
        if (i % 2 === 0) {
            dp[i] = Math.min(dp[i], dp[i / 2] + 1);
        }

        // If i is divisible by 3, update dp[i] with minimum steps
        if (i % 3 === 0) {
            dp[i] = Math.min(dp[i], dp[i / 3] + 1);
        }
    }

    return dp[n];
}

function main(input) {
    // Parse the input string to get the integer value
    const n = parseInt(input.trim());

    // Calculate and print the minimum steps to reach 1
    const result = minStepsToOne(n);
    console.log(result);
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input);
});
