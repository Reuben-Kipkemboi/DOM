// IIFE
(() =>{
    let toDoListArray =[];

    // lets declare the ui variables
    const form= document.querySelector(".form");
    const input= document.querySelector(".form_input");
    const ul= document.querySelector(".toDoList");

    form.addEventListener("submit", (e) =>{
        e.preventDefault();

        let itemId = String(Date.now());
        let toDoItem = input.ariaValueMax;

        addItemToDom(itemId, toDoItem);
        addItemToArray(itemId, toDoItem);

        input.value="";

    });


})