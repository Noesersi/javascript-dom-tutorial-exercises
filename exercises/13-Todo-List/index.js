// Your code here
let todo = document.getElementById("addToDo");
 let parentList = document.querySelector("ul")
        
todo.addEventListener("keypress", (event) =>{
    if(event.key == "Enter"){
        let todoValue = todo.value.trim();
        if(todoValue != ""){
            let newLi= document.createElement("li")
        newLi.innerHTML = `<span><i class="fa fa-trash"></i></span> `+ todoValue;
        parentList.appendChild(newLi)
        todo.value = "";
        }
        

        
    }    
})    
parentList.addEventListener("click", (event) => {
    if (event.target && event.target.classList.contains("fa-trash")) {
        let listItem = event.target.closest("li");
        listItem.remove();
    }
});

