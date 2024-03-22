var restaurant = {
  name:"",
  menus:[],
};
var baconEggsPizza = {
  name: "Bacon and Eggs Pizza",
  price: "13.49",
  type: "breakfast"
};

var pizzaRestaurant = createRestaurant("Sexy Pizza");

function createRestaurant(name) {
  restaurant.name = name;
  restaurant.menus = {breakfast: [], lunch: [], dinner: []}
  return restaurant;
}

function addMenuItem(pizzaRestaurant, menuItem) { //menuItem is an object
  if (restaurant === undefined) { //only initialize if menus is empty
    restaurant = createRestaurant(pizzaRestaurant)
  }
  if (menuItem.type === 'breakfast' && restaurant.menus.breakfast.includes(menuItem) === false) {
    restaurant.menus.breakfast.push(menuItem);
  }
  else if (menuItem.type === 'lunch' && restaurant.menus.lunch.includes(menuItem) === false) {
    restaurant.menus.lunch.push(menuItem);
  }
  else if (menuItem.type === 'dinner' && restaurant.menus.dinner.includes(menuItem) === false) {
    restaurant.menus.dinner.push(menuItem)
  }
  return restaurant;
}

function removeMenuItem(pizzaRestaurant,foodName,foodType) { //name & type are strings
  if (restaurant === undefined) { //only initialize if menus is empty
    restaurant = createRestaurant(pizzaRestaurant)
  }
  if (foodName.includes('Pizza') === false) {
    return `Sorry, we don't sell ${foodName}, try adding a new recipe!`
  }
  else if (restaurant.menus.breakfast[0].type === foodType && restaurant.menus.breakfast[0].name === foodName) {
    restaurant.menus.breakfast.pop();
    return `No one is eating our ${foodName} - it has been removed from the ${foodType} menu!`
  }
  else if (restaurant.menus.lunch[0].type === foodType && restaurant.menus.lunch[0].name === foodName) {
    restaurant.menus.lunch.pop();
    return `No one is eating our ${foodName} - it has been removed from the ${foodType} menu!`
  }
  else if (restaurant.menus.dinner[0].type === foodType && restaurant.menus.dinner[0].name === foodName) {
    restaurant.menus.dinner.pop();
    return `No one is eating our ${foodName} - it has been removed from the ${foodType} menu!`
  }
}

// function checkForFood()
module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem,
  // checkForFood
}