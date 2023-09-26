let list = document.querySelector("#parentLi");
let childs = list.childNodes[3];   
console.log( "list", list)
console.log( "child", childs)


list.removeChild(childs)