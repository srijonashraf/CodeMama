ReverseNumber = (number) => {
  let reversed = number.toString().split("").reverse().join("");
  return parseInt(reversed);
}

function main(input) {
  const num = parseInt(input);
  console.log(ReverseNumber(num));
}

process.stdin.on("data", (data) => {
  main(data.toString());
});