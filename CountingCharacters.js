function main(input) {
    console.log(input.trim().length);
}

process.stdin.once('data', data => {
    main(data.toString());
});
