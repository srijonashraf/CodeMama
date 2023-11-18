function findFirstOccurrence(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    let result = -1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) {
            result = mid;
            high = mid - 1; // Move to the left to find the first occurrence
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return result;
}

function main(input) {
    const data = input.trim().split('\n');
    const n = parseInt(data[0]);
    const arr = data[1].split(' ').map(Number);
    const target = parseInt(data[2]);

    const result = findFirstOccurrence(arr, target);

    if (result !== -1) {
        console.log(result);
    } else {
        console.log("Element not found");
    }
}

process.stdin.on('data', data => {
    main(data.toString());
});
