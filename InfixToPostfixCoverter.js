function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

function getPrecedence(operator) {
    const precedence = {'+': 1, '-': 1, '*': 2, '/': 2};
    return precedence[operator] || 0;
}

function infixToPostfix(infixExpression) {
    const stack = [];
    const postfixExpression = [];

    for (let i = 0; i < infixExpression.length; i++) {
        const char = infixExpression[i];

        if (char.match(/\d/)) {  // Operand
            postfixExpression.push(char);
        } else if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            while (stack.length && stack[stack.length - 1] !== '(') {
                postfixExpression.push(stack.pop());
            }
            stack.pop();  // Pop the '(' from the stack
        } else if (isOperator(char)) {  // Operator
            while (stack.length && getPrecedence(stack[stack.length - 1]) >= getPrecedence(char)) {
                postfixExpression.push(stack.pop());
            }
            stack.push(char);
        }
    }

    while (stack.length) {
        postfixExpression.push(stack.pop());
    }

    return postfixExpression.join('');
}

function main(input) {
    const infixExpression = input.trim();
    const result = infixToPostfix(infixExpression);
    console.log(result);
}

process.stdin.on('data', data => {
    main(data.toString());
});
