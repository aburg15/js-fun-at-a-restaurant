function createRestaurant(name, breakfast, lunch, dinner) {
  var pizzaRestaurant = {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    },
  }
  return pizzaRestaurant;
};


function addMenuItem(pizzaRestaurant, newItem) {
  var itemType = newItem.type;
  if (pizzaRestaurant.menus[itemType].includes(newItem) === false) {
    pizzaRestaurant.menus[itemType].push(newItem)
  }
};


function removeMenuItem(restaurant, pizzaType, type) {
  if (pizzaType.includes('Bacon and Eggs Pizza')) {
    restaurant.menus.breakfast.splice(0, 1);
  } else if (pizzaType.includes('Veggie Pizza')) {
    restaurant.menus.dinner.splice(0, 1);
  } else if (pizzaType.includes('Pizza') === false) {
    return `Sorry, we don't sell ${pizzaType}, try adding a new recipe!`;
  }
  var outOfItem = `No one is eating our ${pizzaType} - it has been removed from the ${type} menu!`;
  return outOfItem;
};


module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
