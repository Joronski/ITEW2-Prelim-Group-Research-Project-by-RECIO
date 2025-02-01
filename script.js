/*
    Project Made by Recio's Group for PRELIM GROUP RESEARCH PROJECT ITEW2 CLIENT/SERVER SIDE SCRIPTING

    Group Members:

    Recio, Joaquin Aaron P. - Group Leader/Lead Programmer
    Alvarez, Kian Clark P.
    Cantalejo, Blessreal S.
    Catchuela, John Eric L.
    Dela Cruz, Kim Francis O.
    Del Mundo, Klarenz V.
    Dela Torre, Mark Anthony A.
    Estrella, Prince Rodni T. - Co-Lead Programmer
    Fortin, Cheryll Anne V.
    Rosario, Al-jay C.

    RECIO's Group © 2025 | ITEW2 - Client/Server Side Scripting
*/

// Function to get the number input and validate it
function getNumber() {
    const inputField = document.getElementById("numberInput");
    const num = inputField.value.trim();

    if (isNaN(num) || num.length < 1 || num.length > 12) {
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
    if (digitToFind === null || digitToFind.length !== 1 || digitToFind < '0' || digitToFind > '9') {
        alert("Please enter a single digit (0-9).");
        return;
    }

    // Count occurrences of the digit
    let count = 0;
    for (let i = 0; i < num.length; i++) {
        if (num[i] === digitToFind) {
            count++;
        }
    }

    document.getElementById("output").innerText = 'Digit "' + digitToFind + '" appears ' + count + ' time(s).';
}

// Function to clear all input and output
function clearAll() {
    document.getElementById("numberInput").value = "";
    document.getElementById("numberInput").focus();
    document.getElementById("output").innerText = "No following output yet";
}