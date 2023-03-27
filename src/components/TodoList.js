import React from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
	const { todos, handleChange, delTodo } = props;
	return (
		<div>
			<ul>
				{todos.map((todo) => (
					<TodoItem
						key={todo.id}
						itemProp={todo}
						handleChange={handleChange}
						delTodo={delTodo}
					></TodoItem>
				))}
			</ul>
		</div>
	);
};

export default TodoList;
