window.onload = function() {
    const testCases = [
        {input: ['1', '+', '1', '='], expected: '2'},
        {input: ['2', '*', '2', '='], expected: '4'},
        {input: ['9', '/', '3', '='], expected: '3'},
        {input: ['5', '-', '2', '='], expected: '3'},
        {input: ['1', '+', '2', '*', '3', '='], expected: '7'},
        {input: ['M+', 'C', '1', '+', 'M-', '='], expected: '-1'},
    ];

    testCases.forEach((test, index) => {
        const display = document.getElementById('display');
        display.value = '';
        test.input.forEach(char => {
            document.querySelector(`button[data-value="${char}"]`).click();
        });
        const result = display.value;
        console.assert(result === test.expected, `Test ${index + 1} failed: expected ${test.expected}, got ${result}`);
    });

    console.log('All tests completed.');
};
