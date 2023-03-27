import React from "react";
import Header from "./Header";
import TodoLogic from "./TodoLogic";

const TodoApp = () => {
	return (
		<div className="wrapper">
			<div className="todos">
				<Header></Header>
				<TodoLogic></TodoLogic>
			</div>
		</div>
	);
};

export default TodoApp;
