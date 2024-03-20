var ingredientList = [];
var menuPrice;
function nameMenuItem(food) {
  return `Delicious ${food}`
}

function createMenuItem(name, price, type) {
  var menuItem = {};
  return menuItem;
}

function addIngredients(ingredient) {
  if (ingredientList.includes(ingredient)) {
  ingredientList.push(ingredient)
  }
}

function formatPrice() {

}
module.exports = {
  nameMenuItem,
  createMenuItem,
  // addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}


