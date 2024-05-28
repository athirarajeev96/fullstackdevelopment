document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    let currentInput = '';
    let memory = 0;

    document.querySelectorAll('.buttons button').forEach(button => {
        button.addEventListener('click', () => {
            handleInput(button.getAttribute('data-value'));
        });
    });

    document.addEventListener('keydown', (event) => {
        const key = event.key;
        if (key >= '0' && key <= '9') {
            handleInput(key);
        } else {
            alert('Only numbers are allowed');
        }
    });

    function handleInput(value) {
        if (value === 'C') {
            currentInput = '';
            display.value = '';
        } else if (value === '=') {
            try {
                display.value = eval(currentInput);
                currentInput = display.value;
            } catch (e) {
                display.value = '';
                currentInput = '';
            }
        } else if (value === 'M+') {
            memory += parseFloat(display.value) || 0;
        } else if (value === 'M-') {
            memory -= parseFloat(display.value) || 0;
        } else if (value === 'MC') {
            memory = 0;
        } else {
            if (isOperator(value) && isOperator(currentInput.slice(-1))) {
                currentInput = currentInput.slice(0, -1) + value;
            } else {
                currentInput += value;
            }
            display.value = currentInput;
        }
    }

    function isOperator(char) {
        return ['+', '-', '*', '/'].includes(char);
    }

    function alert(msg) {
        window.alert(msg);
    }
});
