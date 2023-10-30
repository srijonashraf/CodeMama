function findOddInteger(...numbers) {
    const count = {};
    for (const num of numbers) {
        if (count[num]) {
            count[num]++;
        } else {
            count[num] = 1;
        }
    }
    
    for (const num in count) {
        if (count[num] % 2 !== 0) {
            return num;
        }
    }
}

function main(input) {
  const numbers = input.split(" ").map(Number);
  const result = findOddInteger(...numbers);
  console.log(result);
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('', (input) => {
    main(input);
    rl.close();
});
