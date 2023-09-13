CheckPalindrome = (number) => {
  let reversed = number.toString().split("").reverse().join("");
  if (number == reversed) {
    return true;
  } else {
    return false;
  }
};

display = (num) => {
  if (CheckPalindrome(num)) {
    console.log(`${num} is a palindrome number`);
  } else {
    console.log(`${num} is not a palindrome number`);
  }
};
function main(input) {
  const num = parseInt(input);
  display(num);
}

process.stdin.on("data", (data) => {
  main(data.toString());
});
