const baseUrl = "http://localhost:3030/jsonstore/tasks/";
const mealList = document.getElementById("list");
const loadButton = document.getElementById("load-meals");
const addButton = document.getElementById("add-meal");
const editButton = document.getElementById("edit-meal");

const inputFood = document.getElementById("food");
const inputTime = document.getElementById("time");
const inputCalories = document.getElementById("calories");

let editingMealId = null;

// Load meals
loadButton.addEventListener("click", loadMeals);

async function loadMeals() {
  try {
    const response = await fetch(baseUrl);
    const data = await response.json();

    mealList.innerHTML = ""; // Clear existing meals

    Object.values(data).forEach(({ food, time, calories, _id }) => {
      const mealElement = createMealElement(food, time, calories, _id);
      mealList.appendChild(mealElement);
    });
  } catch (error) {
    console.error("Failed to load meals:", error);
  }
}

// Add a new meal
addButton.addEventListener("click", async () => {
  const food = inputFood.value.trim();
  const time = inputTime.value.trim();
  const calories = inputCalories.value.trim();

  if (!food || !time || !calories) {
    alert("All fields are required!");
    return;
  }

  try {
    await fetch(baseUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ food, time, calories }),
    });

    loadMeals(); // Refresh the list
    clearInputs();
  } catch (error) {
    console.error("Failed to add meal:", error);
  }
});

// Edit an existing meal
editButton.addEventListener("click", async () => {
  if (!editingMealId) return;

  const food = inputFood.value.trim();
  const time = inputTime.value.trim();
  const calories = inputCalories.value.trim();

  if (!food || !time || !calories) {
    alert("All fields are required!");
    return;
  }

  try {
    await fetch(`${baseUrl}${editingMealId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ food, time, calories }),
    });

    loadMeals(); // Refresh the list
    clearInputs();
    editingMealId = null;
    toggleButtons();
  } catch (error) {
    console.error("Failed to edit meal:", error);
  }
});

// Create a meal element for the DOM
function createMealElement(food, time, calories, id) {
  const mealElement = document.createElement("div");
  mealElement.className = "meal";

  const foodElement = document.createElement("h2");
  foodElement.textContent = food;

  const timeElement = document.createElement("h3");
  timeElement.textContent = time;

  const caloriesElement = document.createElement("h3");
  caloriesElement.textContent = calories;

  const buttonsContainer = document.createElement("div");
  buttonsContainer.id = "meal-buttons";

  const changeButton = document.createElement("button");
  changeButton.className = "change-meal";
  changeButton.textContent = "Change";
  changeButton.addEventListener("click", () => populateForm(food, time, calories, id));

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-meal";
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => deleteMeal(id));

  buttonsContainer.appendChild(changeButton);
  buttonsContainer.appendChild(deleteButton);

  mealElement.appendChild(foodElement);
  mealElement.appendChild(timeElement);
  mealElement.appendChild(caloriesElement);
  mealElement.appendChild(buttonsContainer);

  return mealElement;
}

// Populate the form for editing
function populateForm(food, time, calories, id) {
  inputFood.value = food;
  inputTime.value = time;
  inputCalories.value = calories;

  editingMealId = id;
  toggleButtons();
}

// Delete a meal
async function deleteMeal(id) {
  try {
    await fetch(`${baseUrl}${id}`, { method: "DELETE" });
    loadMeals(); // Refresh the list
  } catch (error) {
    console.error("Failed to delete meal:", error);
  }
}

// Utility functions
function clearInputs() {
  inputFood.value = "";
  inputTime.value = "";
  inputCalories.value = "";
}

function toggleButtons() {
  addButton.disabled = !addButton.disabled;
  editButton.disabled = !editButton.disabled;
}
