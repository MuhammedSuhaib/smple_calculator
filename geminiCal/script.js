const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '0';
let operator = null;
let previousInput = null;
let shouldResetDisplay = false;

const updateDisplay = () => {
    display.textContent = currentInput;
};

const calculate = () => {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                result = 'ERROR';
            } else {
                result = prev / current;
            }
            break;
        case '%':
            result = (prev / 100) * current;
            break;
        default:
            return;
    }
    currentInput = result.toString();
    operator = null;
    previousInput = null;
    shouldResetDisplay = true;
};

const handleOperator = (nextOperator) => {
    if (operator && !shouldResetDisplay) {
        calculate();
    }
    
    previousInput = currentInput;
    operator = nextOperator;
    shouldResetDisplay = true;
};

const handleNumber = (number) => {
    if (currentInput === '0' || shouldResetDisplay) {
        currentInput = number;
        shouldResetDisplay = false;
    } else {
        currentInput += number;
    }
};

const handleDecimal = () => {
    if (shouldResetDisplay) {
        currentInput = '0.';
        shouldResetDisplay = false;
        return;
    }
    if (!currentInput.includes('.')) {
        currentInput += '.';
    }
};

const clearAll = () => {
    currentInput = '0';
    operator = null;
    previousInput = null;
    shouldResetDisplay = false;
};

const clearEntry = () => {
    currentInput = '0';
    shouldResetDisplay = true;
};


buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.dataset.value;

        if (!isNaN(value)) {
            handleNumber(value);
        } else if (value === '.') {
            handleDecimal();
        } else if (value === 'C') {
            clearAll();
        } else if (value === 'CE') {
            clearEntry();
        } else if (value === '=') {
            calculate();
        } else {
            handleOperator(value);
        }

        updateDisplay();
    });
});

updateDisplay();
