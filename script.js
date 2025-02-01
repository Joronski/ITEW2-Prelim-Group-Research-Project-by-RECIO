// Function to get the number input and validate it
function getNumber() {
    const inputField = document.getElementById("numberInput");
    const num = inputField.value.trim();

    if (!/^\d{1,12}$/.test(num)) {
        alert("Please enter a valid number (1 to 12 digits).");
        return null;
    }
    return num;
}

// Function to count all digits
function countAllDigits() {
    const num = getNumber();
    if (!num) return;
    document.getElementById("output").innerText = `Total Digits: ${num.length}`;
}

// Function to count even digits
function countEvenDigits() {
    const num = getNumber();
    if (!num) return;
    const evenCount = num.split("").filter(digit => digit % 2 === 0).length;
    document.getElementById("output").innerText = `Even Digits Count: ${evenCount}`;
}

// Function to count odd digits
function countOddDigits() {
    const num = getNumber();
    if (!num) return;
    const oddCount = num.split("").filter(digit => digit % 2 !== 0).length;
    document.getElementById("output").innerText = `Odd Digits Count: ${oddCount}`;
}

// Function to find the most occurring digit(s)
function mostOccurringDigits() {
    const num = getNumber();
    if (!num) return;

    const frequency = {};
    num.split("").forEach(digit => {
        frequency[digit] = (frequency[digit] || 0) + 1;
    });

    const maxFreq = Math.max(...Object.values(frequency));
    const mostFrequentDigits = Object.keys(frequency).filter(digit => frequency[digit] === maxFreq);

    document.getElementById("output").innerText = `Most Occurring Digit(s): ${mostFrequentDigits.join(", ")} (appeared ${maxFreq} times)`;
}

// Function to find a specific digit
function findDigit() {
    const num = getNumber();
    if (!num) return;

    const digitToFind = prompt("Enter a digit to find (0-9):");
    if (!/^\d$/.test(digitToFind)) {
        alert("Please enter a single digit (0-9).");
        return;
    }

    const count = num.split("").filter(digit => digit === digitToFind).length;
    document.getElementById("output").innerText = `Digit "${digitToFind}" appears ${count} time(s).`;
}

// Function to clear all input and output
function clearAll() {
    document.getElementById("numberInput").value = "";
    document.getElementById("numberInput").focus();
    document.getElementById("output").innerText = "";
}