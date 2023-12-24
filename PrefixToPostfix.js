function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

function prefixToPostfix(prefixExpression) {
    const stack = [];
    const operators = ['+', '-', '*', '/'];
    const postfixExpression = [];

    for (let i = prefixExpression.length - 1; i >= 0; i--) {
        const char = prefixExpression[i];

        if (char.match(/\d/)) {  // Operand
            stack.push(char);
        } else if (isOperator(char)) {  // Operator
            const operand1 = stack.pop();
            const operand2 = stack.pop();
            const newExpression = operand1 + operand2 + char;
            stack.push(newExpression);
        }
    }

    return stack.pop();
}

function main(input) {
    const prefixExpression = input.trim().split(' ');
    const result = prefixToPostfix(prefixExpression[0]);
    console.log(result);
}

process.stdin.on('data', data => {
    main(data.toString());
});
