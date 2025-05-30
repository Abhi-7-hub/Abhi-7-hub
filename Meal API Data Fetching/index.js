// Buttons aur output div select karo
let categoryBtn = document.getElementById("get-category-data");
let ingredientBtn = document.getElementById("get-ingredient-data");
let output = document.getElementById("output");

// Category data (Seafood)
function getCategoriesData() {
  fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
    .then(response => response.json())
    .then(data => {
      showDataOnPage(data.meals);
    })
    .catch(error => {
      output.innerText = "Something went wrong.";
    });
}

// Ingredient data (Chicken Breast)
function getIngredientData() {
  fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast")
    .then(response => response.json())
    .then(data => {
      showDataOnPage(data.meals);
    })
    .catch(error => {
      output.innerText = "Something went wrong.";
    });
}

// Data ko page pe show karne wala function
function showDataOnPage(meals) {
  // Pehle clean karo
  output.innerHTML = "";

  // Har meal ke liye ek card banao
  meals.forEach(meal => {
    let div = document.createElement("div");
    // Inside showDataOnPage() function
        div.classList.add("meal-card"); // yeh line add karo

    div.innerHTML = `
      <h3>${meal.strMeal}</h3>
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}" width="200"/>
    `;
    output.appendChild(div);
  });
}

// Buttons ke click event
categoryBtn.addEventListener("click", getCategoriesData);
ingredientBtn.addEventListener("click", getIngredientData);
