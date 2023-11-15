const Permutation = (string) => {
  const result = [];

  const permute = (current, remaining) => {
    if (remaining.length === 0) {
      result.push(current);
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      const nextChar = remaining[i];
      const rest = remaining.slice(0, i) + remaining.slice(i + 1);
      permute(current + nextChar, rest);
    }
  };

  permute("", string);

  return result.sort();
};

function main(input) {
  const string = input.trim();
  const result = Permutation(string);
  console.log(result.join(" "));
}

process.stdin.on("data", (data) => {
  main(data.toString());
});
