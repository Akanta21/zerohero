// What is reduce?
var orders = [
  { amount: 250 },
  { amount: 100 },
  { amount: 200 },
  { amount: 325 }
]

var totalAmount = orders.reduce((sum, order)=> sum + order.amount, 0)

// var totalAmount = 0
// for (var i = 0; i < orders.length; i++) {
//   totalAmount += orders[i].amount
// }
