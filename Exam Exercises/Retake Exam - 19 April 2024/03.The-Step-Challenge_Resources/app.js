const baseUrl = 'http://localhost:3030/jsonstore/records';
const listElement = document.getElementById('list');
const loadRecordsButton = document.getElementById('load-records');
const addRecordButton = document.getElementById('add-record');
const editRecordButton = document.getElementById('edit-record');

const nameInput = document.getElementById('p-name');
const stepsInput = document.getElementById('steps');
const caloriesInput = document.getElementById('calories');

let currentEditingId = null;

// Load all records from the server
async function loadRecords() {
  listElement.innerHTML = '';
  try {
    const res = await fetch(baseUrl);
    const data = await res.json();

    Object.values(data).forEach(record => {
      const li = document.createElement('li');
      li.classList.add('record');

      li.innerHTML = `
        <div class="info">
          <p>${record.name}</p>
          <p>${record.steps}</p>
          <p>${record.calories}</p>
        </div>
        <div class="btn-wrapper">
          <button class="change-btn">Change</button>
          <button class="delete-btn">Delete</button>
        </div>
      `;

      const changeButton = li.querySelector('.change-btn');
      const deleteButton = li.querySelector('.delete-btn');

      // Event listeners for edit and delete
      changeButton.addEventListener('click', () => populateEditForm(record));
      deleteButton.addEventListener('click', () => deleteRecord(record._id));

      listElement.appendChild(li);
    });
  } catch (error) {
    console.error('Failed to load records:', error);
  }
}

// Add a new record
async function addRecord() {
  const name = nameInput.value;
  const steps = stepsInput.value;
  const calories = caloriesInput.value;

  if (!name || !steps || !calories) {
    alert('All fields are required!');
    return;
  }

  try {
    await fetch(baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, steps, calories }),
    });

    clearForm();
    await loadRecords();
  } catch (error) {
    console.error('Failed to add record:', error);
  }
}

// Populate the form for editing
function populateEditForm(record) {
  nameInput.value = record.name;
  stepsInput.value = record.steps;
  caloriesInput.value = record.calories;

  currentEditingId = record._id;
  editRecordButton.disabled = false;
  addRecordButton.disabled = true;
}

// Edit an existing record
async function editRecord() {
  const name = nameInput.value;
  const steps = stepsInput.value;
  const calories = caloriesInput.value;

  if (!name || !steps || !calories) {
    alert('All fields are required!');
    return;
  }

  try {
    await fetch(`${baseUrl}/${currentEditingId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, steps, calories }),
    });

    clearForm();
    await loadRecords();

    editRecordButton.disabled = true;
    addRecordButton.disabled = false;
    currentEditingId = null;
  } catch (error) {
    console.error('Failed to edit record:', error);
  }
}

// Delete a record
async function deleteRecord(id) {
  try {
    await fetch(`${baseUrl}/${id}`, { method: 'DELETE' });
    await loadRecords();
  } catch (error) {
    console.error('Failed to delete record:', error);
  }
}

// Clear the form inputs
function clearForm() {
  nameInput.value = '';
  stepsInput.value = '';
  caloriesInput.value = '';
}

// Event listeners
loadRecordsButton.addEventListener('click', loadRecords);
addRecordButton.addEventListener('click', addRecord);
editRecordButton.addEventListener('click', editRecord);
