let items = []; // Array to hold items
let editIndex = null; // To track the item being edited

// Function to add or update an item
document.getElementById('crudForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from reloading the page

    const name = document.getElementById('itemName').value;
    const description = document.getElementById('itemDescription').value;

    if (editIndex === null) {
        // Add new item
        items.push({ name, description });
    } else {
        // Update existing item
        items[editIndex] = { name, description };
        editIndex = null;
    }

    // Clear form fields
    document.getElementById('itemName').value = '';
    document.getElementById('itemDescription').value = '';

    // Refresh the item list
    displayItems();
});

// Function to display all items
function displayItems() {
    const tableBody = document.getElementById('itemTableBody');
    tableBody.innerHTML = ''; // Clear current table contents

    items.forEach((item, index) => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.name}</td>
            <td>${item.description}</td>
            <td>
                <button class="edit" onclick="editItem(${index})">Edit</button>
                <button class="delete" onclick="deleteItem(${index})">Delete</button>
            </td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Function to edit an item
function editItem(index) {
    const item = items[index];
    document.getElementById('itemName').value = item.name;
    document.getElementById('itemDescription').value = item.description;
    editIndex = index;
}

// Function to delete an item
function deleteItem(index) {
    items.splice(index, 1); // Remove item from the array
    displayItems(); // Refresh the list
}

// Display items initially (empty initially)
displayItems();
