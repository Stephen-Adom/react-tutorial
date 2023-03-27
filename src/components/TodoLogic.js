import React, { useState } from "react";
import InputTodo from "./InputTodo";
import TodoList from "./TodoList";

const TodoLogic = () => {
	const [todos, setTodos] = useState([
		{
			id: 1,
			title: "Setup development environment",
			completed: true,
		},
		{
			id: 2,
			title: "Develop website and add content",
			completed: false,
		},
		{
			id: 3,
			title: "Deploy to live server",
			completed: false,
		},
	]);

	const handleChange = (id) => {
		setTodos((prevState) =>
			prevState.map((todo) => {
				if (todo.id === id) {
					return {
						...todo,
						completed: !todo.completed,
					};
				}
				return todo;
			})
		);
	};

	const delTodo = (id) => {
		setTodos([
			...todos.filter((todo) => {
				return todo.id !== id;
			}),
		]);
	};

	return (
		<div>
			<InputTodo></InputTodo>
			<TodoList
				todos={todos}
				handleChange={handleChange}
				delTodo={delTodo}
			></TodoList>
		</div>
	);
};

export default TodoLogic;
