const baseUrl = 'http://localhost:3030/jsonstore/appointments';
const appointmentsList = document.getElementById('appointments-list');
const addAppointmentBtn = document.getElementById('add-appointment');
const editAppointmentBtn = document.getElementById('edit-appointment');
const loadAppointmentsBtn = document.getElementById('load-appointments');

const carModelInput = document.getElementById('car-model');
const carServiceInput = document.getElementById('car-service');
const dateInput = document.getElementById('date');

let currentEditingId = null;

// Fetch and display all appointments
async function loadAppointments() {
  appointmentsList.innerHTML = '';
  try {
    const res = await fetch(baseUrl);
    const data = await res.json();

    Object.values(data).forEach((appointment) => {
      const li = document.createElement('li');
      li.classList.add('appointment');
      li.innerHTML = `
        <h2>${appointment.model}</h2>
        <h3>${appointment.date}</h3>
        <h3>${appointment.service}</h3>
        <div class="buttons-appointment">
          <button class="change-btn">Change</button>
          <button class="delete-btn">Delete</button>
        </div>
      `;

      const changeBtn = li.querySelector('.change-btn');
      const deleteBtn = li.querySelector('.delete-btn');

      // Attach event listeners for change and delete buttons
      changeBtn.addEventListener('click', () => populateEditForm(appointment));
      deleteBtn.addEventListener('click', () => deleteAppointment(appointment._id));

      appointmentsList.appendChild(li);
    });
  } catch (error) {
    console.error('Failed to load appointments:', error);
  }
}

// Add a new appointment
async function addAppointment() {
  const model = carModelInput.value;
  const service = carServiceInput.value;
  const date = dateInput.value;

  if (!model || !service || !date) {
    alert('All fields are required!');
    return;
  }

  try {
    await fetch(baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ model, service, date }),
    });

    clearForm();
    await loadAppointments();
  } catch (error) {
    console.error('Failed to add appointment:', error);
  }
}

// Populate form for editing
function populateEditForm(appointment) {
  carModelInput.value = appointment.model;
  carServiceInput.value = appointment.service;
  dateInput.value = appointment.date;

  currentEditingId = appointment._id;
  editAppointmentBtn.disabled = false;
  addAppointmentBtn.disabled = true;
}

// Edit an existing appointment
async function editAppointment() {
  const model = carModelInput.value;
  const service = carServiceInput.value;
  const date = dateInput.value;

  if (!model || !service || !date) {
    alert('All fields are required!');
    return;
  }

  try {
    await fetch(`${baseUrl}/${currentEditingId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ model, service, date }),
    });

    clearForm();
    await loadAppointments();

    editAppointmentBtn.disabled = true;
    addAppointmentBtn.disabled = false;
    currentEditingId = null;
  } catch (error) {
    console.error('Failed to edit appointment:', error);
  }
}

// Delete an appointment
async function deleteAppointment(id) {
  try {
    await fetch(`${baseUrl}/${id}`, {
      method: 'DELETE',
    });

    await loadAppointments();
  } catch (error) {
    console.error('Failed to delete appointment:', error);
  }
}

// Clear form fields
function clearForm() {
  carModelInput.value = '';
  carServiceInput.value = '';
  dateInput.value = '';
}

// Event listeners
loadAppointmentsBtn.addEventListener('click', loadAppointments);
addAppointmentBtn.addEventListener('click', addAppointment);
editAppointmentBtn.addEventListener('click', editAppointment);
