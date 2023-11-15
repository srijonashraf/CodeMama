const BinarySearch = (arr, target) => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      return mid; // Target element found, return its index
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1; // Element not found
};

function main(input) {
  const lines = input.trim().split("\n");
  const size = parseInt(lines[0]);
  const arr = lines[1].split(" ").map(Number);
  const target = parseInt(lines[2]);

  const result = BinarySearch(arr, target);

  if (result !== -1) {
    console.log(result);
  } else {
    console.log("Element not found");
  }
}

process.stdin.on("data", (data) => {
  main(data.toString());
});
