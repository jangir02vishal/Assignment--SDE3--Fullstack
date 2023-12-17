// Function to calculate the minimum steps to make a password strong
function strongPasswordChecker(password) {
    // Check the length of the password
    const len = password.length;
    let steps = 0;

    // Check if the password contains at least one lowercase letter, one uppercase letter, and one digit
    const hasLower = /[a-z]/.test(password);
    const hasUpper = /[A-Z]/.test(password);
    const hasDigit = /\d/.test(password);

    // Count the number of repeating characters in a row
    let repeats = 0;
    for (let i = 2; i < len; i++) {
        if (password[i] === password[i - 1] && password[i - 1] === password[i - 2]) {
            repeats++;
            i++; // Skip the next character
        }
    }

    // Case 1: Password length is less than 6
    if (len < 6) {
        const addChars = Math.max(0, 6 - len);
        return Math.max(addChars, 3 - (hasLower + hasUpper + hasDigit));
    }

    // Case 2: Password length is between 6 and 20
    if (len <= 20) {
        return Math.max(0, 3 - (hasLower + hasUpper + hasDigit), repeats);
    }

    // Case 3: Password length is greater than 20
    let deleteCount = len - 20;
    repeats -= Math.min(deleteCount, repeats / 3);

    // Calculate the total steps required
    return deleteCount + Math.max(0, 3 - (hasLower + hasUpper + hasDigit), repeats);
}

// Unit tests
console.log(strongPasswordChecker("a"));           // Output: 5
console.log(strongPasswordChecker("aA1"));         // Output: 3
console.log(strongPasswordChecker("1337C0d3"));    // Output: 0