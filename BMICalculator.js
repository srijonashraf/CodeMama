const BMICalc = (...numbers) => {
    let res = numbers[1] / (numbers[0] * numbers[0]);
    return res;
  };
  
  const Comment = (res) => {
      res < 18.5 ? console.log(`BMI: ${res.toFixed(2)}\nUnderweight`) :
      res < 25 && res >= 18.5 ? console.log(`BMI: ${res.toFixed(2)}\nNormal weight`) :
      res < 30 && res >= 25 ? console.log(`BMI: ${res.toFixed(2)}\nOverweight`) :
      console.log("Obese");
  };
  
  function main(input) {
    const numbers = input.trim().split(" ").map(parseFloat);
    Comment(BMICalc(...numbers));
  }
  
  process.stdin.on("data", (data) => {
    main(data.toString());
  });
  