//deliveryOrder is an ordered list (array), orderNumber is an object with 5 properties
function takeOrder(orderNumber, deliveryOrder) {
  if (deliveryOrder.length < 3) {
    deliveryOrder.push(orderNumber);
  }
}

function refundOrder(orderNumber, deliveryOrder) {
  var findOrder = deliveryOrder.indexOf(Object.keys(orderNumber))
  
}
module.exports = {
  takeOrder,
  refundOrder,
  // listItems,
  // searchOrder
}