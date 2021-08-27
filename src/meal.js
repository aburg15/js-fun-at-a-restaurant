function nameMenuItem(menuItemName) {
  return `Delicious ${menuItemName}`;
};

function createMenuItem(name, price, type) {
  var menuItem = {
    name: name,
    price: price,
    type: type,
 }
  return menuItem;
};

function addIngredients(topping1, toppings) {
  if (toppings.includes(topping1)) {
    return topping1
  } else {
    return toppings.push(topping1)
  }
};

function formatPrice(initialPrice) {
  return `$${initialPrice}`;
};

function decreasePrice(decreasedPrice) {
  return decreasedPrice * .90;
};

function createRecipe(title, ingredients, type) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: type,
  }
  return recipe;
};


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
