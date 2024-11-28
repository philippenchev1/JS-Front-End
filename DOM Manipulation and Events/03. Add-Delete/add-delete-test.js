function addItem() {
    const input = document.querySelector('#newItemText');
    const list = document.querySelector('#items');

    const text = input.value.trim();

    if (text === '') return;

    const li = document.createElement('li');
    li.textContent = text;

    const deleteLink = document.createElement('a');
    deleteLink.href = '#';
    deleteLink.textContent = '[Delete]';

    deleteLink.addEventListener('click', function(event) {
        event.preventDefault();
        list.removeChild(li);
    });

    li.appendChild(deleteLink);
    list.appendChild(li);

    input.value = '';

}