import React from "react";
import Header from "../components/Header";
import TodoLogic from "../components/TodoLogic";

const Home = () => {
	return (
		<div className="todos">
			<Header></Header>
			<TodoLogic></TodoLogic>
		</div>
	);
};

export default Home;
