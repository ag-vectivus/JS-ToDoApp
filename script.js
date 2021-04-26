"use strict";

const todoList = document.querySelector(".todos");
const addTodo = document.querySelector(".add");

const generateTemplate = (todo) => {
	const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center todos__todo">
      ${todo}
    </li>
  `;

	todoList.innerHTML += html;
};

addTodo.addEventListener("submit", (e) => {
	e.preventDefault();
	const todo = addTodo.add.value.trim();

	if (todo.length) {
		generateTemplate(todo);
		addTodo.reset();
	}
});
