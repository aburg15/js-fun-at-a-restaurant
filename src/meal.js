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

function addIngredients(topping, ingredients) {
  if (ingredients.includes(topping)) {
    return topping
  } else {
    return ingredients.push(topping)
  }
};

function formatPrice(price) {
  return `$${price}`;
};

function decreasePrice(newPrice) {
  return newPrice * .90;
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
