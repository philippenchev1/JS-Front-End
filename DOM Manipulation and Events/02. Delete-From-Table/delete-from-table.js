function deleteByEmail() {
    // Get the email input value
    const emailInput = document.querySelector('input[name="email"]').value;
    // Get all rows in the table body
    const rows = Array.from(document.querySelectorAll('#customers tbody tr'));
    // Initialize a flag to track if a match is found
    let isDeleted = false;
     // Iterate over the rows
    for (const row of rows) {
        const emailCell = row.cells[1]; // Second cell contains the email

        if (emailCell.textContent === emailInput) {
            // Delete the matching row
            row.remove();
            isDeleted = true;
            break; // Exit the loop after deletion
        }
    }
    // Update the result element
    const resultElement = document.getElementById('result');
    resultElement.textContent = isDeleted ? 'Deleted.' : 'Not found.';
}

