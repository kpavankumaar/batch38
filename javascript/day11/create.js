var btn = document.getElementsByTagName('button')[0];
var model = document.getElementById('model');
var brand = document.getElementById('brand');
var carColor = document.getElementById('color');
var type = document.getElementById('type');
var modelVal, brandVal, carColorVal, typeVal;
var newOrder ;
var listOfOrders = [];
btn.onclick = function(event){
	event.preventDefault();
	modelVal = model.value 
	brandVal = brand.value 
	carColorVal = carColor.value 
	typeVal = type.value 
	newOrder = new TeslaCarOrder(modelVal,brandVal,carColorVal,typeVal);
	listOfOrders.push(newOrder);
}
function TeslaCarOrder(modelVal,brandVal,carColorVal,typeVal){
	console.log(modelVal + ' ' + brandVal + ' ' + carColorVal + ' ' + typeVal);
	this.model = modelVal;
	this.brand = brandVal;
	this.color = carColorVal;
	this.type = typeVal;
	// this.drive = function(){
	// 	console.log('any one can drive ');
	// }
} 
TeslaCarOrder.prototype.drive = function(){
	console.log(this.model + ' ' + this.brand + ' ' + this.color + ' ' + this.type);
}


// TeslaCarOrder()