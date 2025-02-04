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

// Function to get the number input from the user
function getNumber() {
    const inputField = document.getElementById("numberInput");
    const num = inputField.value.trim();

    // Validate the input: check if it's a number and within the required length
    if (isNaN(num) || num.length < 1 || num.length > 12) {
        alert("Please enter a valid number (1 to 12 digits).");
        return null;
    }
    return num;
}

// Function to count all digits
function countAllDigits() {
    // Get the number from the getNumber function
    const num = getNumber();

    // If no number is returned, exit the function
    if (!num) return;

    // Display the total number of digits in the output element
    document.getElementById("output").innerText = `Total Digits: ${num.length}`;
}

// Function to count even digits
function countEvenDigits() {
    // Get the number from the getNumber function
    const num = getNumber();
    if (!num) return;

    // Count the even digits in the number
    const evenCount = num.split("").filter(digit => digit % 2 === 0).length;
    
    // Display the count of even digits in the output element
    document.getElementById("output").innerText = `Even Digits Count: ${evenCount}`;
}

// Function to count odd digits
function countOddDigits() {
    // Get the number from the input
    const num = getNumber();

    // If no number is provided, exit the function
    if (!num) return;

    // Count the odd digits in the number
    const oddCount = num.split("").filter(digit => digit % 2 !== 0).length;

    // Display the count of odd digits
    document.getElementById("output").innerText = `Odd Digits Count: ${oddCount}`;
}

// Function to find the most occurring digit(s)
function mostOccurringDigits() {
    // Get the number from the input
    const num = getNumber();

    // If no number is provided, exit the function
    if (!num) return;

    // Initialize an object to store the frequency of each digit
    const frequency = {};

    // Counting the frequency of each digit
    num.split("").forEach(digit => {
        frequency[digit] = (frequency[digit] || 0) + 1;
    });

    // Find the maximum frequency
    const maxFreq = Math.max(...Object.values(frequency));

    // Find the digits with the maximum frequency
    const mostFrequentDigits = Object.keys(frequency).filter(digit => frequency[digit] === maxFreq);

    // Display the most occurring digit(s) and their frequency
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