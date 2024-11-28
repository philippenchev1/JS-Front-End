document.addEventListener('DOMContentLoaded', validate);

function validate() {
    // Select the email input field
    const emailInput = document.getElementById('email');

    // Define the regular expression for email validation
    const emailPattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

    // Attach a 'change' event listener to the email input field
    emailInput.addEventListener('change', () => {
        // Check if the email matches the pattern
        if (emailPattern.test(emailInput.value)) {
            // If valid, remove the 'error' class
            emailInput.classList.remove('error');
        } else {
            // If invalid, add the 'error' class
            emailInput.classList.add('error');
        }
    });
}
