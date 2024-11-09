function validatePassword(password) {
    let isValid = true;
    
    if (password.length < 6 || password.length > 10) {
        console.log("Password must be between 6 and 10 characters");
        isValid = false;
    }

    if (!/^[A-Za-z0-9]+$/.test(password)) {
        console.log("Password must consist only of letters and digits");
        isValid = false;
    }

    const digitCount = password.split('').filter(char => /\d/.test(char)).length;
    if (digitCount < 2) {
        console.log("Password must have at least 2 digits");
        isValid = false;
    }

    if (isValid) {
        console.log("Password is valid");
    }
}


validatePassword("logIn");      // Output: Password must be between 6 and 10 characters, Password must have at least 2 digits
validatePassword("MyPass123");  // Output: Password is valid
validatePassword("Pa$s$s");     // Output: Password must consist only of letters and digits, Password must have at least 2 digits
