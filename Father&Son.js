CalcAgeDiff = (fAge, sAge) => {
  return Math.abs(fAge - 2 * sAge);
};

function main(input) {
  const numbers = input.trim().split(" ").map(Number);
  const fAge = parseInt(numbers[0]);
  const sAge = parseInt(numbers[1]);
  console.log(CalcAgeDiff(fAge, sAge));
}

process.stdin.once("data", (data) => {
  main(data.toString());
});
