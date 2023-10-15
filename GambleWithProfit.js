function main(input) {
    const numbers = input.trim().split(' ');
    const prob = parseFloat(numbers[0]);
    const prize = parseFloat(numbers[1]);
    const pay = parseFloat(numbers[2]);

    
    const res = CalcPay(prob, prize,pay);
    
    console.log(res);
}

function CalcPay(prob, prize,pay) {
    if(prob*prize>pay){
        return true;
    }
    else {
        return false;
    }
}

process.stdin.once('data', data => {
    main(data.toString());
});
