const LongestSubstring = (string) => {
  let maxLength = 0;
  let start = 0;
  const charIndexMap = {};

  for (let i = 0; i < string.length; i++) {
    const currentChar = string[i];
    const prevIndex = charIndexMap[currentChar];

    if (prevIndex !== undefined && prevIndex >= start) {
      // If the character is repeated, update the starting index
      start = prevIndex + 1;
    }

    // Update the character index in the map
    charIndexMap[currentChar] = i;

    // Update the maximum length
    maxLength = Math.max(maxLength, i - start + 1);
  }

  return maxLength;
};

function main(input) {
  const string = input.trim();
  const result = LongestSubstring(string);
  console.log(result);
}

process.stdin.on("data", (data) => {
  main(data.toString());
});
