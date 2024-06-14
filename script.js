document.addEventListener('DOMContentLoaded', () => {
    const addItemButton = document.getElementById('addItemButton');
    const itemInput = document.getElementById('itemInput');
    const itemList = document.getElementById('itemList');

    addItemButton.addEventListener('click', () => {
        const itemText = itemInput.value.trim();
        if (itemText !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = itemText;
            itemList.appendChild(listItem);
            itemInput.value = '';
        }
    });

    itemInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addItemButton.click();
        }
    });
});
