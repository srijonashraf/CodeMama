function bonus(salary)
{
    return salary*10/100;
}


function main (input)
{
    const salary = parseFloat(input.trim());
    console.log(parseInt(bonus(salary)));
}

process.stdin.on('data', data => {
    main(data.toString());
})
