function addItem() {
    // Get references to input field and list
    const input = document.getElementById('newItemText');
    const list = document.getElementById('items');

    // Get the input value and validate
    const text = input.value.trim();
    if (text === '') {
        return; // Do nothing if the input is empty
    }

    // Create the new list item
    const li = document.createElement('li');
    li.textContent = text;

    // Create the delete link
    const deleteLink = document.createElement('a');
    deleteLink.href = '#';
    deleteLink.textContent = '[Delete]'; // Ensure this matches exactly

    // Attach an event listener to the delete link
    deleteLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default action of the link
        list.removeChild(li); // Remove the list item
    });

    // Append the delete link to the list item
    li.appendChild(deleteLink);

    // Append the list item to the list
    list.appendChild(li);

    // Clear the input field
    input.value = '';
}
