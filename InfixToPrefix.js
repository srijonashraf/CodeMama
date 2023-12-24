function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

function getPrecedence(operator) {
    const precedence = {'+': 1, '-': 1, '*': 2, '/': 2};
    return precedence[operator] || 0;
}

function infixToPrefix(infixExpression) {
    const stack = [];
    const prefixExpression = [];

    for (let i = infixExpression.length - 1; i >= 0; i--) {
        const char = infixExpression[i];

        if (char.match(/\d/)) {  // Operand
            prefixExpression.push(char);
        } else if (char === ')') {
            stack.push(char);
        } else if (char === '(') {
            while (stack.length && stack[stack.length - 1] !== ')') {
                prefixExpression.push(stack.pop());
            }
            stack.pop();  // Pop the ')' from the stack
        } else if (isOperator(char)) {  // Operator
            while (stack.length && getPrecedence(stack[stack.length - 1]) > getPrecedence(char)) {
                prefixExpression.push(stack.pop());
            }
            stack.push(char);
        }
    }

    while (stack.length) {
        prefixExpression.push(stack.pop());
    }

    return prefixExpression.reverse().join('');
}

function main(input) {
    const infixExpression = input.trim();
    const result = infixToPrefix(infixExpression);
    console.log(result);
}

process.stdin.on('data', data => {
    main(data.toString());
});
