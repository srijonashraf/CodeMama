CalcGCD =(a,b)=>{
    if(b==0){
        return a;
    }
    return CalcGCD(b,a%b);
}


function main(input) {
  const numbers = input.trim().split(" ");
  const a = parseInt(numbers[0]);
  const b = parseInt(numbers[1]);
  console.log(CalcGCD(a, b));
}
process.stdin.on("data", (data) => {
  main(data.toString());
});
