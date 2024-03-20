var ingredients = [];
var menuPrice;
var menuItem = {};
var recipe = {};

function nameMenuItem(food) {
  return "Delicious " + food ;
}

function createMenuItem(name, price, type) {
  menuItem.name = name;
  menuItem.price = price;
  menuItem.type = type;
  return menuItem;
}

function addIngredients(ingredient, ingredients) {
  if(ingredients.includes(ingredient)===false) {
    ingredients.push(ingredient)
  }
}

function formatPrice(initialPrice) {
  return menuItem.price = "$" + initialPrice;
}

function decreasePrice() {
  return menuItem.price * 0.9;
}

function createRecipe(title, ingredients, type) {
  recipe.ingredients = ingredients;
  if (ingredients.length === 2) {
    recipe.title = nameMenuItem("Eggs & Bacon")
    recipe.type = "breakfast";
    return recipe;
  }
  else if (ingredients.length === 3) {
    recipe.title = nameMenuItem("Grilled Cheese")
    recipe.type = "lunch"
    return recipe;
  }
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


