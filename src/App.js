import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
	return (
		<div className="App wrapper">
			<Navbar></Navbar>
			<Outlet></Outlet>
		</div>
	);
}

export default App;
