import React from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
	const { todos, handleChange, delTodo, setUpdate } = props;
	return (
		<div>
			<ul>
				{todos.map((todo) => (
					<TodoItem
						key={todo.id}
						itemProp={todo}
						handleChange={handleChange}
						delTodo={delTodo}
						setUpdate={setUpdate}
					></TodoItem>
				))}
			</ul>
		</div>
	);
};

export default TodoList;
