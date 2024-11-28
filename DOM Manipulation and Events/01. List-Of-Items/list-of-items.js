function addItem() {
    const newItemText = document.querySelector('#newItemText').value;

    if (newItemText.trim() !== '') {
        const itemList = document.querySelector('#items');

        const newListItem = document.createElement('li');
        newListItem.textContent = newItemText;

        itemList.appendChild(newListItem);

        document.querySelector('#newItemText').value = '';

    }

}