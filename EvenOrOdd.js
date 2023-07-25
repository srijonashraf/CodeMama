function main(input) {
    const number = parseInt(input.trim());
    if (input % 2 == 0) {
        console.log(`${input} is an even number.`);
    }

    else {
        console.log(`${input} is an odd number.`);
    }
}

process.stdin.on('data', data => {
    main(data.toString());
})