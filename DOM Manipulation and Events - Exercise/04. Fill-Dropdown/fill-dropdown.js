document.addEventListener('DOMContentLoaded', solve);

function result() {
    // Select the necessary elements
    const newItemTextInput = document.getElementById('newItemText');
    const newItemValueInput = document.getElementById('newItemValue');
    const menu = document.getElementById('menu');
    const form = document.querySelector('form');

    // Add an event listener for form submission
    form.addEventListener('submit', function (event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get the values from the input fields
        const newItemText = newItemTextInput.value;
        const newItemValue = newItemValueInput.value;

        if (newItemText && newItemValue) {
            // Create a new <option> element
            const newOption = document.createElement('option');

            // Set its textContent and value
            newOption.textContent = newItemText;
            newOption.value = newItemValue;

            // Append the new option to the select menu
            menu.appendChild(newOption);

            // Clear the input fields
            newItemTextInput.value = '';
            newItemValueInput.value = '';

            // Set focus back to the 'newItemText' input field
            newItemTextInput.focus();
        }
    });
}
