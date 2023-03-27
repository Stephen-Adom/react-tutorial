import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./routes/Home";
import About from "./routes/About";
import Profile from "./routes/Profile";
import NotMatch from "./routes/NoMatch";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App></App>,
		errorElement: <NotMatch />,
		children: [
			{
				index: true,
				element: <Home></Home>,
			},
			{
				path: "about",
				element: <About></About>,
			},
			{
				path: "profile",
				element: <Profile></Profile>,
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
