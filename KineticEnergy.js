KineticEnergy = (m, v) => {
    return 0.5 * m * v * v;
}
function main (input){
    const numbers = input.trim().split(' ');
    const m = parseFloat(numbers[0]);
    const v = parseFloat(numbers[1]);
    console.log(Math.round(KineticEnergy(m,v)));
}


process.stdin.once('data', data => {
    main(data.toString());
});