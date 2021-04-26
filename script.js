"use strict";

const todoList = document.querySelector(".todos");
const addTodo = document.querySelector(".add");
const search = document.querySelector(".search__input");

// add todos
const generateTemplate = (todo) => {
	const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center todos__todo">
      ${todo}
      <i class="far fa-trash-alt delete"></i>
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

// delete todos (using event delegation)
todoList.addEventListener("click", (e) => {
	if (e.target.classList.contains("delete")) {
		e.target.parentElement.remove();
	}
});

// search (filter) todos
const filterTodos = (term) => {
	Array.from(todoList.children)
		.filter((todo) => !todo.textContent.toLowerCase().includes(term))
		.forEach((todo) => todo.classList.add("filtered"));

	Array.from(todoList.children)
		.filter((todo) => todo.textContent.toLowerCase().includes(term))
		.forEach((todo) => todo.classList.remove("filtered"));
};

search.addEventListener("keyup", () => {
	const term = search.value.trim().toLowerCase();
	filterTodos(term);
});
