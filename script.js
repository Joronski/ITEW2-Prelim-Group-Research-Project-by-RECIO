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
    const num = inputField.value;
    const numcheck = Number(inputField.value);

    // Validate the input: check if it's a number and within the required length
    if (isNaN(num) || num.length < 1 || num.length > 12 || numcheck < 0) {
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

    let evenCount = 0; 
    let number = parseInt(num);

    // Count the even digits using arithmetic operations
    while (number > 0) {
        let digit = number % 10; // Get the last digit
        if (digit % 2 === 0) { 
            evenCount++; // Incrementing if the digit is even
        }
        number = parseInt(number / 10); // Removing the last digit
    }

    // Display the count of even digits in the output element
    document.getElementById("output").innerText = `Even Digits Count: ${evenCount}`;
}

// Function to count odd digits
function countOddDigits() {
    // Get the number from the getNumber function
    const num = getNumber();
    if (!num) return;

    let oddCount = 0; 
    let number = parseInt(num);

    // Count the odd digits using arithmetic operations
    while (number > 0) {
        let digit = number % 10; // Get the last digit
        if (digit % 2 !== 0) { 
            oddCount++; // Incrementing if the digit is odd
        }
        number = parseInt(number / 10); // Removing the last digit using parseInt
    }

    // Display the count of odd digits in the output element
    document.getElementById("output").innerText = `Odd Digits Count: ${oddCount}`;
}

// Function to find the most occurring digit(s)
function mostOccurringDigits() {
    // Get the number from the input
    let num = parseInt(getNumber());

    // If no number is provided or it's not valid, exit the function
    if (isNaN(num)) return;

    let maxFreq = 0;
    let mostFrequentDigits = ""; // To store the digits with max frequency

    // Loop through digits 0 to 9
    for (let digit = 0; digit <= 9; digit++) {
        let tempNum = num;
        let count = 0;

        // Count occurrences of the current digit
        while (tempNum > 0) {
            let lastDigit = tempNum % 10; // Get the last digit
            if (lastDigit === digit) {
                count++;
            }
            tempNum = parseInt(tempNum / 10); // Removing the last digit using parseInt
        }

        // Update max frequency and most frequent digits
        if (count > maxFreq) {
            maxFreq = count;
            mostFrequentDigits = digit; // Replacing with the new most frequent digit
        } else if (count === maxFreq && count > 0) {
            mostFrequentDigits += " " + digit; // Adding the digit if it matches max frequency
        }
    }

    // Display the most occurring digit(s) and their frequency
    document.getElementById("output").innerText = "Most Occurring Digit(s): " + mostFrequentDigits + " (appeared " + maxFreq + " times)";
}

// Function to count a specific digit in a number without using arrays or strings
function findDigit() {
    // Get the number input
    let num = getNumber();  // Ensure getNumber() is working properly
    if (num === null || num === undefined || num === '') {
        alert("No input received. Please enter a valid number.");
        return;
    }

    num = parseInt(num, 10); // Convert to an integer

    // Ensure the input is a valid positive integer
    if (isNaN(num) || num < 0) {
        alert("Please enter a valid positive number.");
        return;
    }

    // Get the digit to find
    let digitToFind = parseInt(prompt("Enter a digit to find (0-9):"), 10);

    // Validate that the input is a single digit (0-9)
    if (isNaN(digitToFind) || digitToFind < 0 || digitToFind > 9) {
        alert("Please enter a single digit (0-9).");
        return;
    }

    // Count occurrences using mathematical operations
    let count = 0;
    let tempNum = num;

    while (tempNum > 0) {
        let lastDigit = tempNum % 10; // Extract last digit
        if (lastDigit === digitToFind) {
            count++;
        }
        tempNum = parseInt(tempNum / 10); // Removing last digit using parseInt
    }

    // Display the result
    document.getElementById("output").innerText = `Digit "${digitToFind}" appears ${count} time(s) in ${num}`;
}

// Function to clear all input and output
function clearAll() {
    document.getElementById("numberInput").value = "";
    document.getElementById("numberInput").focus();
    document.getElementById("output").innerText = "No following output yet";
}