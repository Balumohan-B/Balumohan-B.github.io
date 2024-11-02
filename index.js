function reverseString() {
    const input = document.getElementById("stringInput").value;
    const reversed = input.split("").reverse().join("");
    document.getElementById("reverseResult").textContent = `Reversed: ${reversed}`;
}
function checkPalindrome() {
    const input = document.getElementById("numberInput").value;
    const reversed = input.split("").reverse().join("");
    const isPalindrome = input === reversed;
    document.getElementById("palindromeResult").textContent = 
        isPalindrome ? `${input} is a Palindrome.` : `${input} is not a Palindrome.`;
}
function calculateTip() {
    const subtotal = parseFloat(document.getElementById("billSubtotal").value);
    const tipPercent = parseFloat(document.getElementById("tipPercentage").value);
    const tipAmount = (tipPercent / 100) * subtotal;
    const totalAmount = subtotal + tipAmount;
    document.getElementById("tipResult").textContent = 
        `Total with Tip: $${totalAmount.toFixed(2)}`;
}

