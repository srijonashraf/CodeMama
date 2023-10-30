
function canFitRectangleInsideCircle(width, height, radius) {
    // Calculate the diagonal of the rectangle
    const diagonal = Math.sqrt(width * width + height * height);

    // Check if the diagonal is less than or equal to the diameter of the circle
    return diagonal <= 2 * radius;
}

function main(input) {
    const numbers = input.trim().split(" ").map(Number);
    const width = parseInt(numbers[0]);
    const height = parseInt(numbers[1]);
    const radius = parseInt(numbers[2]);
    console.log(canFitRectangleInsideCircle(width, height,radius));
  }
  
  process.stdin.once("data", (data) => {
    main(data.toString());
  });
  