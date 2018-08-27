var incompleteTask = document.getElementById('incomplete-task');
var completeTask = document.getElementById('completed-task');
var addBtn = document.getElementsByTagName('button')[0];
var inputTextField = document.getElementById('new-task');
var editBtn = document.getElementsByClassName('edit');
var deleteBtn = document.getElementsByClassName('delete');
var editBtnArr = [].slice.call(editBtn);
var deleteBtnArr = Array.from(deleteBtn);
// console.log(addBtn);

function addTaskFn(){
	// create elements li , input type checkbox, input type text , label, span, edit btn and delete btn 
	var totalTask = document.createElement('li');
	var checkBox = document.createElement('input');
	var inputText = document.createElement('input');
	var label =  document.createElement('label');
	var editBtn =  document.createElement('button');
	var deleteBtn =  document.createElement('button');
	var arr = [checkBox,inputText,label,editBtn,deleteBtn];
		

	editBtn.setAttribute('class','edit');
	deleteBtn.setAttribute('class','delete');
	checkBox.setAttribute('type','checkbox');
	inputText.setAttribute('type','text');
	label.innerText = inputTextField.value;
	editBtn.innerText = 'Edit';
	deleteBtn.innerText = 'Delete';

	editBtn.onclick = editTask;
	//appending the child elements to list item 
	arr.map(function(obj){
		totalTask.appendChild(obj);
	});
	
	incompleteTask.appendChild(totalTask);


}


function editTask(){
	var parentOfEditBtn = this.parentNode;
	var labelEl = parentOfEditBtn.querySelector('label');
	var inputTextEl = parentOfEditBtn.querySelector('input[type=text]');
	var liElClassVal = parentOfEditBtn.getAttribute('class');
	if(liElClassVal === 'editMode'){
		labelEl.innerText = inputTextEl.value;
		parentOfEditBtn.setAttribute('class','');
	}else{
		parentOfEditBtn.setAttribute('class','editMode');
		inputTextEl.value = labelEl.innerText;
	}
	 
}
function deleteTask(){
	console.log(this);
}
addBtn.onclick = addTaskFn;

editBtnArr.map(function(obj){
	obj.onclick = editTask;
})
deleteBtnArr.map(function(obj){
	obj.onclick = deleteTask;
})
