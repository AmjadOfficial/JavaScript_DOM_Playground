const display = document.getElementById('display');
let expression = '';
let currentNumber = '';

function clearDisplay() {
  expression = '';
  currentNumber = '';
  display.innerText = '0';
}

//function only invoked when the user presses the equals button
// and the expression is evaluated
function evaluateExpression() {
  try {
    const result = eval(expression);
    display.innerText = result;
    expression = result.toString();
    currentNumber = expression;
  } catch {
    display.innerText = 'Error';
    expression = '';
    currentNumber = '';
  }
}

function handleOperator(value) {
  // Prevent consecutive operators
  if (expression === '' || ['+', '-', '*', '/'].includes(expression.slice(-1))) return; //slice(-1) gets the last character. if the last character is an operator, return. which prevents adding operator without a number
  expression += value;
  currentNumber = '';
}

function handleDigit(value) {
  expression += value;
  currentNumber += value;
  display.innerText = currentNumber;
}

function handleButtonClick(value) {
  switch (value) {
    case 'C':
      clearDisplay();
      break;
    case '=':
      evaluateExpression();
      break;
    case '+':
    case '-':
    case '*':
    case '/':
      handleOperator(value);
      break;
    default:
      handleDigit(value);
  }
}

// Register all button clicks
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    handleButtonClick(button.innerText);
  });
});
