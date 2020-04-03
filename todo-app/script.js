const classNames = {
    TODO_ITEM: "todo-item",
    TODO_CHECKBOX: "todo-check",
    TODO_TEXT: "todo-text",
    TODO_DELETE: "todo-delete"
};

const list = document.getElementById("todo-list");
const itemCountSpan = document.getElementById("item-count");
const uncheckedCountSpan = document.getElementById("unchecked-count");
const inputElement = document.getElementById("todo-text");

class TodoItem {
    constructor() {
        const text = ""
        const checked = false;
    }

//     text: ""
// ,
//     checked: false
// };
}

const todoList = [];

function newTodo() {
    if (!checkInput()) {
        return;
    }
    const todoText = inputElement.value;
    addToList(todoText);
}

function addToList(text, isChecked = false) {
    const todo = new TodoItem()
    // const todo = Object.assign({}, todoItem);
    todo.text = text;
    todo.checked = isChecked;
    todoList.push(todo);
    renderList();
}

function renderList() {
    list.innerHTML = "";

    for (todo of todoList) {
        const pos = todoList.indexOf(todo);

        //Checkbox
        const checkboxElement = document.createElement("input");
        checkboxElement.setAttribute("type", "checkbox");
        checkboxElement.setAttribute("class", classNames.TODO_CHECKBOX);
        if (todo.checked === true) checkboxElement.checked = true;
        checkboxElement.setAttribute("name", pos);
        checkboxElement.setAttribute("onClick", "setChecked(" + pos + ")");

        //Span
        const spanElement = document.createElement("span");
        spanElement.setAttribute("class",classNames.TODO_TEXT)
        spanElement.innerHTML = todo.text;

        //Delete Button
        const deleteBtn = document.createElement("button");
        deleteBtn.setAttribute("class", classNames.TODO_DELETE);
        deleteBtn.innerHTML = "Delete";
        deleteBtn.setAttribute("onClick", "deleteTodo(" + pos + ")");

        //Todo Element
        const todoElement = document.createElement("li");
        todoElement.setAttribute("class", "todo-list ");
        todoElement.appendChild(checkboxElement);
        todoElement.appendChild(spanElement);
        todoElement.appendChild(deleteBtn);

        list.appendChild(todoElement);
    }
    updateStats();
}

function updateStats() {
    inputElement.value = "";
    itemCountSpan.innerHTML = todoList.length;
    countChecked();
}

function checkInput() {
    if (inputElement.value.length === 0) {
        alert("You must add a text to the todo");
        return false;
    }
    return true;
}

function deleteTodo(pos) {
    todoList.splice(pos, 1);
    renderList();
}

function setChecked(pos) {
    const isChecked = todoList[pos].checked;
    console.log("Set checked called, isChecked: " + isChecked);
    todoList[pos].checked = !isChecked;
    countChecked();
}

function countChecked() {
    let counter = 0;

    for (todo of todoList) {
        if (todo.checked === false) counter++;
    }
    uncheckedCountSpan.innerHTML = counter;
}

function createFakeTodo() {
    addToList("TODO 1", false);
    addToList("TODO 2", true);
    addToList("TODO 3", true);
}

createFakeTodo();
renderList();
updateStats();
