import React from "react";
import Header from "../components/Header";
import TodoLogic from "../components/TodoLogic";

const Home = () => {
	return (
		<div className="wrapper">
			<div className="todos">
				<Header></Header>
				<TodoLogic></TodoLogic>
			</div>
		</div>
	);
};

export default Home;
