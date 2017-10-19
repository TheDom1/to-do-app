
function onReady() {
    const toDos = [];
    const addToDoForm = document.getElementById('addToDoForm');



    function createNewToDo() {
        const newToDoText = document.getElementById('nextToDoText');
        if (!newToDoText) { return }
        toDos.push({
            title: newToDoText.value,
            complete: false
          })
    function renderTheUI(toDos){
      const toDoList = document.getElementById('toDoList');

      toDoList.textContent = '';

      toDos.forEach(function(toDo) {
        const newLi =document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = checkbox;

        newLi.textContent =toDo.title;

        todoList.appendChild(newLi);
        newLi.appendChild(checkbox);
      });
    }
          addToDoForm.addEventListener('submit', event => {
              event.preventDefault();
        });
        newToDoText.value = '';
        renderTheUI(toDos);
    }
    const addToDoForm = document.getElementById('addToDoForm');
    const newToDoForm = document.getElementById('newToDoText');
    const toDoList = document.getElementById(toDoList);

    addToDoForm.addEventListener('submit', event => {
        event.preventDefault();


    // get the text
    let title = newToDoText.value;
    // create a new list
    let newLi = document.createElement('li');
    // create a new input
    let checkbox = document.createElement('input');
    // set the input's type to checkbox
    checkbox.type = 'checkbox';
    //set the title
    newLi.textContent = title;
    // attach the check box to the li
    newLi.appendChild(checkbox);
    // attach theli to the ul
    toDoList.appendChild(newLi);
    // empty the input
    newToDoText.value = '';
    });
    renderTheUI(toDos);
}

window.onload = function() {
   onReady();
};
