const search = document.getElementById('search'),
    submit = document.getElementById('submit'),
    random = document.getElementById('random'),
    mealsEl = document.getElementById('meals'),
    resultHeading = document.getElementById('result-heading'),
    single_mealEl = document.getElementById('single-meal');

// Search meal and fetch from API
function searchMeal(e) {
    e.preventDefault();

    // Clear single meal
    single_mealEl.innerHTML = '';

    // Get search term
    const term = search.value;

    //check for empty
    if (term.trim()) {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?s=${search}`)
            .then(res => res.json())
            .then(dat => {

            })
    } else {
        alert('Please enter a search term');
    }
}


// Event listeners
submit.addEventListener('submit', searchMeal);
