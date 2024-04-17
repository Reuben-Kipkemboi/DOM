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
    ul.addEventListener('click', (e) => {
        let id = e.target.getAttribute('data-id');
        if (!id) return; // user clicked in something else
        // pass id through to functions
        removeItemFromDOM(id);
        removeItemFromArray(id);
    });

    function addItemToArray(itemId, toDoItem) {
        // add item to array as an object with an ID so we can find and delete it later
        toDoListArray.push({ itemId, toDoItem });
        console.log(toDoListArray);
      }
    

    


})