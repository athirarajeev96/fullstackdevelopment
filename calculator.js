function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        alert('Invalid expression');
        clearDisplay();
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('keydown', function (event) {
        const key = event.key;
        if (!(key >= '0' && key <= '9') && key !== '+' && key !== '-' && key !== '*' && key !== '/' && key !== '.') {
            alert('Only numbers and operators (+, -, *, /) are allowed');
        }
    });
});
