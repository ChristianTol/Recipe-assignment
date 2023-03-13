const base_url = "https://www.themealdb.com/api/json/v1/1/random.php";

const getMeal = () => {
  fetch(base_url)
    .then((res) => res.json())
    .then((data) => {
      showMeal(data);
    });
};

getMeal();

const showMeal = (data) => {
  const meal = data.meals[0];

  const mealImage = meal.strMealThumb;
  document.getElementById("card__image").src = mealImage;

  const mealName = meal.strMeal;
  document.getElementById("card__title").textContent = mealName;

  const mealCategory = meal.strCategory;
  document.getElementById("card__category").textContent = mealCategory;

  const recipeLink = `<a class="card__link" href="${meal.strYoutube}" target="_blank">Watch the recipe</a>`;
  document.getElementById("card__link").innerHTML += recipeLink;

  const mealInstructions = meal.strInstructions;
  document.getElementById("instructions").textContent += mealInstructions;

  const mealTags = meal.strTags;
  if (meal.strTags) {
    document.getElementById("card__tags").textContent = mealTags;
  } else {
    document.getElementById("card__tags").textContent = "No tags";
  }

  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      document.getElementById("ingredients").innerHTML += `
        <li> ✔ ${meal[`strMeasure${i}`]} ${meal[
        `strIngredient${i}`
      ].toLowerCase()}</li>
      `;
    } else {
      break;
    }
  }
};
