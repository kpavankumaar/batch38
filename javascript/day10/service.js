console.log(data);
// sum of  item cost for each customer
var ordersList = data.map(function(obj){
	var newObj = {}
	newObj.firstName = obj.firstName;
	newObj.orders = obj.orders
	return newObj;
})
console.log(ordersList)
