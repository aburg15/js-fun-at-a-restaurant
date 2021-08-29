function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3)
    deliveryOrders.push(order)
};

function refundOrder(order, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].orderNumber === order) {
      deliveryOrders.splice(i, 1);
    }
  }
};

function listItems(deliveryOrders) {
  var list = "";
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (i == deliveryOrders.length - 1) {
      list += `${deliveryOrders[i].item}`;
    } else {
      list += `${deliveryOrders[i].item}, `;
    }
  }
  return list;
};

function searchOrder(deliveryOrders, orders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].item.includes(orders)) {
      return true;
    }
  }
  return false
};



module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
