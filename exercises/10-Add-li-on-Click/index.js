let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let newLi = document.createElement('li');
	newLi.innerHTML = "newliii"
	let mylist= document.getElementById("myList")
	mylist.append(newLi)
});
