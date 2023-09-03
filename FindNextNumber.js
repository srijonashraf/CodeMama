const FindNextNumber = (...numbers) => {
    const sub = numbers[1] - numbers[0];
    return numbers[numbers.length-1] + sub;
  };
  
  function main(input) {
    // Use split to separate input values and map to convert them to integers
    const numbers = input.trim().split(" ").map(Number);
  
    console.log(FindNextNumber(...numbers));
  }
  
  process.stdin.on("data", (data) => {
    main(data.toString());
  });
  