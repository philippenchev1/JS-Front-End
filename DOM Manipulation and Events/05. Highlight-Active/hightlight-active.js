document.addEventListener('DOMContentLoaded', solve);

function focused() {
    // Select all input fields within the document
    const inputs = document.querySelectorAll('input');

    // Add event listeners to each input field
    inputs.forEach(input => {
        // Add a 'focus' event listener
        input.addEventListener('focus', () => {
            // Add the 'focused' class to the parent element
            input.parentElement.classList.add('focused');
        });

        // Add a 'blur' event listener
        input.addEventListener('blur', () => {
            // Remove the 'focused' class from the parent element
            input.parentElement.classList.remove('focused');
        });
    });
}
