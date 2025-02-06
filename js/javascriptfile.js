function calculateSquare() {
    const input = document.getElementById('numberInput').value;
    const resultDiv = document.getElementById('result');
    if (input === "") {
        resultDiv.textContent = "Please enter a number!";
    } else {
        const number = parseFloat(input);
        const square = number * number;
        resultDiv.textContent = `Square of ${number} is ${square}`;
    }
}
