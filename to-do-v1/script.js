let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', () => {
    const paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', () => {
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', () => {
        paragraph.removeChild(paragraph);
    })
})




//need way of creating "-" button. something like classList.add() id="removeToDo"
//paragraph.removeChild(paragraph) isn't working on dblclick
//rounded edges perhaps
//circular "-" button created to the right of each to-do element
//Figure out how to center everything properly