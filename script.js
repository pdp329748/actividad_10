let list = document.getElementById("list");

let array = [];

const showArray = () => array.map(element => {
	let myLI = document.createElement("li");
	myLI.innerHTML = element;
	list.appendChild(myLI);
})

const addElement = () => {
	let element = document.getElementById("element");
	list.innerHTML = "";
	array.push(element.value);
	showArray();
	element.value = "";
}

const erase = () => {
	list.innerHTML = "";
	array = [];
}

showArray();