var placeorderBtn = document.getElementById('placeorder');
var nextPage = document.getElementById('nextpage');
var accessoriesBtn = document.getElementById('accessoriesbtn');
var musicsystem = document.getElementById('musicsystem');
var camera = document.getElementById('camera');
var spoiler = document.getElementById('spoiler');
var tyre = document.getElementById('tyre');
var musicsystemVal, cameraVal, spoilerVal, tyreVal;

var model = document.getElementById('model');
var brand = document.getElementById('brand');
var carColor = document.getElementById('color');
var type = document.getElementById('type');
var modelVal, brandVal, carColorVal, typeVal;
var newOrder ;
var listOfOrders = [];

var urlSearch = window.location.search;//?model=2013&brand=tesla&color=red&type=sedan"
// replace first and last value with "{" "}"
// replace & with , 
// replace = with : 
// sorround each word with qoutes 
var obj = urlSearch.replace('?','{').replace(/$/,'}').replace(/&/g,',').replace(/=/g,':').replace(/\b/g,'"').replace(/[+]+/g,'');
if(urlSearch){
	var data = JSON.parse(obj);
		
}


function createOrder (){
	// event.preventDefault();
	// debugger;
	if(model){
		modelVal = model.value 
		brandVal = brand.value 
		carColorVal = carColor.value 
		typeVal = type.value 	
	}else if(data){
		modelVal = data.model 
		brandVal = data.brand
		carColorVal = data.color
		typeVal = data.type	
	}
	musicsystemVal = musicsystem.value;
	cameraVal = camera.value;
	spoilerVal = spoiler.value;
	// tyreVal = tyre.value;
	var accessoriesArr = [musicsystemVal, cameraVal, spoilerVal, tyreVal]
	newOrder = new TeslaCarOrder(modelVal,brandVal,carColorVal,typeVal);
	listOfOrders.push(newOrder);
}

function Accessories (musicsystemVal, cameraVal, spoilerVal, tyreVal ){
	this.musicsystem = musicsystemVal;
	this.camera = cameraVal;
	this.spoiler = spoilerVal;
	this.tyre = tyreVal;

}
function TeslaCarOrder(modelVal,brandVal,carColorVal,typeVal,arrOfAccessories){
	console.log(modelVal + ' ' + brandVal + ' ' + carColorVal + ' ' + typeVal);
	this.model = modelVal;
	this.brand = brandVal;
	this.color = carColorVal;
	this.type = typeVal;
	Accessories()
	// this.drive = function(){
	// 	console.log('any one can drive ');
	// }
} 
TeslaCarOrder.prototype.drive = function(){
	console.log(this.model + ' ' + this.brand + ' ' + this.color + ' ' + this.type);
}


//bindings 
// if (nextPage) {
// 		nextPage.onclick = function (e){
// 		window.location = 'accessories.html';
// 		createOrder(e);
// 	}	
// }
if(accessoriesBtn){
	accessoriesBtn.onclick = Accessories;
}


if (window.location.pathname.indexOf('accessories.html') !== -1) {
	placeorderBtn.onclick = createOrder;	
}









// TeslaCarOrder()