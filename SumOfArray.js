function findMedianSum(arr) {
    // Sort the input array
    arr.sort((a, b) => a - b);
  
    // Calculate the median
    const n = arr.length;
    let median;
    if (n % 2 === 0) {
      median = (arr[n / 2 - 1] + arr[n / 2]) / 2;
    } else {
      median = arr[Math.floor(n / 2)];
    }
  
    // Sum elements less than the median
    const sumOfElements = arr.reduce((sum, element) => {
      if (element < median) {
        return sum + element;
      }
      return sum;
    }, 0);
  
    return sumOfElements;
  }
  
  // Input
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  rl.question('', (size) => {
    rl.question('', (elementsInput) => {
      const elements = elementsInput.split(' ').map(Number);
  
      // Check if all elements are the same
      const isAllSame = elements.every((value, index, array) => value === array[0]);
  
      if (isAllSame) {
        console.log(0);
      } else {
        // Calculate and print the result
        const result = findMedianSum(elements);
        console.log(result);
      }
  
      rl.close();
    });
  });
  