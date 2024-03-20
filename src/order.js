//deliveryOrder is an ordered list (array), orderNumber is an object with 5 properties

var order1 = {};
var order2 = {};
var order3 = {};
var deliveryOrders = [];
var findOrder;
var findIndex;
var itemList;

function takeOrder(orderNumber, deliveryOrders) {
  if (deliveryOrders.length < 3) {
    deliveryOrders.push(orderNumber);
  }
}

function refundOrder(returnOrderNumber, deliveryOrders) {
  for (i = 0; i < deliveryOrders.length; i++) {
    findOrder = deliveryOrders[i].orderNumber;
    findIndex = i;
    if (findOrder === returnOrderNumber) {
      deliveryOrders.splice(findIndex,1)
    }
  }
}

function listItems(deliveryOrders) {
  var listOfItems = "";
  for (i = 0; i < deliveryOrders.length; i++) {
    listOfItems += deliveryOrders[i].item + ", ";
  }
  
  return listOfItems.substring(0, listOfItems.length-2);
}

function searchOrder(deliveryOrders,item) {
  itemList = listItems(deliveryOrders);
  for (i = 0; i < deliveryOrders.length; i++) {
    if (itemList.includes(item)) {
      return true;
    }
    else {
      return false;
    }
  }
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}