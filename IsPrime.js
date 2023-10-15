isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

function main(input) {
  const number = parseInt(input.trim());
  if (isPrime(number)) {
    console.log(`${number} is a prime number.`);
  } else {
    console.log(`${number} is not a prime number.`);
  }
}

process.stdin.on("data", (data) => {
  main(data.toString());
});
